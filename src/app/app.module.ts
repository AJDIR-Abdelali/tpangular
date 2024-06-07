import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { FormsComponent } from './Components/forms/forms.component';
import { DetailsComponent } from './Components/details/details.component';
import { PipesComponent } from './Components/pipes/pipes.component';

import { FormsModule } from '@angular/forms';
import { CalculPipe } from './calcul.pipe';
import { CalculstringPipe } from './calculstring.pipe';
import { WeatherComponent } from './Components/weather/weather.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { ReactiveFormsModule } from '@angular/forms';
import { EtudiantService } from './Services/etudiant.service';
import { StudentComponent } from './Components/student/student.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';




export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'weather', component: WeatherComponent },
  {path:'student',component:StudentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FormsComponent,
    DetailsComponent,
    PipesComponent,
    WeatherComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    CalculPipe,
    CalculstringPipe,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule

  ],
  providers: [
    provideClientHydration(),
    EtudiantService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
