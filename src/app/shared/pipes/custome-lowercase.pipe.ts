import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customeLowercase'
})
export class CustomeLowercasePipe implements PipeTransform {

  transform(inputStr: string): string {
    return inputStr.toLowerCase();
  }

}
