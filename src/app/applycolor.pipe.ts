import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'applycolor',
  standalone: true
})
export class ApplycolorPipe implements PipeTransform {

  transform(status: string): unknown {
    if(status === 'active')
      return 'green';
    else if(status === 'inactive')
      return 'yellow';
    else
      return 'red';
  }

}
