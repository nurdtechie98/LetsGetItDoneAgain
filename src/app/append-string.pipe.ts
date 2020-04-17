import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendString'
})
export class AppendStringPipe implements PipeTransform {

  transform(value: string, before:string, after: string ): string {
    return `${before} ${value} ${after}`;
  }

}
