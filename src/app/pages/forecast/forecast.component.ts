import { Component, Input } from '@angular/core';

import { Forecast } from '../../models/index';
import { ForecastService, ImgService } from '../../services/index';

@Component({
   selector: 'wth-forecast',
   templateUrl: './forecast.component.html',
   styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent {

   @Input() forecast!: Forecast;

   constructor(
      public forecastS: ForecastService,
      private img: ImgService
   ) {
   }
   public close(): void {
      this.forecastS.delete();
   }

   public getImg(url: string): string {
      return this.img.get(url);
   }


}


