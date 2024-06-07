import { HttpClient , HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

interface WeatherData {
  temp: number;
  pres: number;
  hum: number;
  country: string;
  flagUrl: string;
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  location: string = '';
  weatherData: WeatherData | null = null;
  loading: boolean = false;
  error: string = '';

  private apiKey = '';

  constructor(private http: HttpClient) { }

  fetchWeatherData() {
    if (!this.location) {
      this.error = 'Please enter a location';
      return;
    }

    this.loading = true;
    this.error = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${this.apiKey}&units=metric`;

    this.http.get(url).subscribe(
      (data: any) => {
        const country = data.sys.country;
        this.weatherData = {
          temp: data.main.temp,
          pres: data.main.pressure,
          hum: data.main.humidity,
          country: this.getName(country),
          flagUrl: this.getFlagUrl(country)
        };
        this.loading = false;
      },
      (error) => {
        this.error = error.message || "Unable to fetch weather data";
        this.loading = false;
      }
    );
  }

  getFlagUrl(country: string): string {
    if (country === 'EH') { // Western Sahara country code is 'EH'
      return 'https://flagsapi.com/MA/flat/32.png'; // Morocco flag URL
    }
    return `https://flagsapi.com/${country}/flat/32.png`;
  }
  getName(country: string): string {
    if (country === 'EH') { // Western Sahara country code is 'EH'
      return 'MA'; // Morocco flag URL
    }
    return country;
  }
}
