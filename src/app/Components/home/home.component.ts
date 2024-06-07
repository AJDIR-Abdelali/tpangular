import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  op1: number = 0;
  op2: number = 0;
  rslt: any;
  somme(): void {
    this.rslt = this.op1 + this.op2;
  }
  multiplication(): void {
    this.rslt = this.op1 * this.op2;
  }
  division(): void {
    this.rslt = this.op1 / this.op2;
  }
  soustraction(): void {
     this.rslt = this.op1 - this.op2;
  }
}
