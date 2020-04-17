import { Pipe, PipeTransform } from '@angular/core';
import { LowerCasePipe } from '@angular/common';

@Pipe({
  name: 'customLowercase',
})
export class CustomLowercasePipe implements PipeTransform {
  constructor( public lowercase: LowerCasePipe) { // create instance of inbuilt pipe, remember to add the provider in app.module.ts 

  }
  transform(value: string, before:string, after: string ): string {
    return this.lowercase.transform(`${before} ${value} ${after}`);
  }

}
