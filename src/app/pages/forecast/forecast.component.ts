import { Component, Input } from '@angular/core';

import { Forecast } from '../../models/index';
import { ForecastService } from '../../services/forecast.service';

@Component({
   selector: 'wth-forecast',
   templateUrl: './forecast.component.html',
   styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent {

   @Input() forecast!: Forecast;

   constructor(public forecastS: ForecastService) {
   }
   public close(): void {
      this.forecastS.delete();
   }


}


