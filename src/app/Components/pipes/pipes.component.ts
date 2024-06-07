import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  tab:number[] = [5,9,15,6,12,0,4,19];

  //pipe
  number=100;
  val=5

    //
    public dateAujourd: Date = new Date();
    public nombre: number = 0;
    public message: string = "";
    someString = "This is a test string";
    targetChar = 's';
    numberValue = 123.456; // Replace with your actual number data

    constructor() {
    }

    ngOnInit(): void {
      this.dateAujourd = new Date();
      this.nombre = 100;
      this.message = "Bonjour mes etudiants";
    }
  //
}
