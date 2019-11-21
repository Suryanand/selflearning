import { Pipe, PipeTransform } from '@angular/core';
import { $ } from 'protractor';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string, showMask : boolean): any {
    if(!showMask){
      return `${value}`;
    }else{
      value = value.substring(value.length - 4);
      return `******${value}`;
    }
  }

}
