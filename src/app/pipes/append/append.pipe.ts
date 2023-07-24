import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append'
})
export class AppendPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "city name: " + value;
  }

}
