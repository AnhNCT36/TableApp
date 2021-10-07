import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformNumber'
})
export class TransformNumberPipe implements PipeTransform {

  transform(value: string, phone: string): string {
    return '(+84)' + phone.replaceAll("-", "");
  }
}
