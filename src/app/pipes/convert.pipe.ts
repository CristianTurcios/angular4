import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name : 'convert'})
export class ConvertPipe implements PipeTransform{
    transform(value: string, by: string):string{
      let valueOne = parseInt(value);
      let valueTwo = parseInt(by);

      let result = 'The multiplication: ' + valueOne + '*' + valueTwo + '=' + (valueOne*valueTwo);
      return result;
    }
}
