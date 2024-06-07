import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wc'
})
export class WordCountPipePipe implements PipeTransform {

  transform(value: string): number {
    if (!value) {
      return 0;
    }
    return value.split(' ').length;
  }

}
