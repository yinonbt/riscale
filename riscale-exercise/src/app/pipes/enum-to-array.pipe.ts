import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToArray'
})
export class EnumToArrayPipe implements PipeTransform {
  transform(data: object) {
    const keys = Object.keys(data);
    const offset = keys.length / 2;
    const arr = [];
    for (let i = 0; i < offset; i++) {
      arr[i] = { key: Number(keys[i]), value: keys[i + offset] };
    }
    return arr;
  }
}
