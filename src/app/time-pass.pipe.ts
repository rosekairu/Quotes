import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePass',
})
export class TimePassPipe implements PipeTransform {
  transform(value: any): number {
    console.log(value);
    return null;
  }
}
