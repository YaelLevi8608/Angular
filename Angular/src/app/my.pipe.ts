import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'my'
})
export class MyPipe implements PipeTransform {

  newString?:string;
  transform(value: any):any {
    this.newString=value.substring(0,1).toUpperCase();
    return this.newString+value.substring(1);
  }

}
