import { Component, Input } from '@angular/core';

import { ForecastHour } from '../../models/index';

@Component({
   selector: 'wth-forecast-by-hour',
   templateUrl: './forecast-by-hour.component.html',
   styleUrls: ['./forecast-by-hour.component.scss']
})
export class ForecastByHourComponent {
   @Input() hour!: ForecastHour;
   @Input() dayI!: number;


   public getTime(date: string): string | void {
      const time: string = date.split(' ')[1];
      const hour: number = +time.split(':')[0];
      if (this.dayI === 0 && hour <= new Date().getHours()) return;

      return `${time}`
   }
}
