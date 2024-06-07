import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculstring',
  standalone: true
})
export class CalculstringPipe implements PipeTransform {

  transform(value: string, char: string): number {
    if (!value || !char) return 0;
    let count = 0;
    for (let i = 0; i < value.length; i++) {
      if (value[i] === char) {
        count++;
      }
    }
    return count;
  }

}
