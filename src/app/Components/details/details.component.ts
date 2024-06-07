import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  tab:number[] = [5,9,15,6];
  moyennes : number[] = [14 , 9 , 15 , 16 , 15 , 11 ,2];

  afficherColor: boolean=false;

  public changeColor():void{
    this.afficherColor =! this.afficherColor;
  }
}
