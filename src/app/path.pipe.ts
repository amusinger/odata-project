import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'path'
})
export class PathPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) { return null }
      return `/assets/images/${value}`;
  }

}
