import { Injectable } from '@angular/core';

import { Forecast } from '../models/forecast';

@Injectable({
   providedIn: 'root'
})
export class ForecastService {
   public forecast: Forecast | null = null;
   public wrapper!: HTMLElement;

   public setForecast(forecast: Forecast, wr: HTMLElement): void {
      this.forecast = forecast;
      this.wrapper = wr;
      this.wrapper.style.minHeight = '800px';
   }

   public delete(): void {
      this.forecast = null;
      this.wrapper.style.minHeight = '220px';
   }

   constructor() {
   }
}
