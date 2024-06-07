import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcul',
  standalone: true
})
export class CalculPipe implements PipeTransform {

  transform(value: number, somme: string): number {
    return value + parseFloat(somme);
  }

}
