import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePiperoni'
})
export class DatePipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let [year, month, day] = value.split('-')
    return `${day}.${month}.${year}`
  }

}
