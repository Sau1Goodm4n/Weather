import { Component, Input, OnInit } from '@angular/core';

import { Location, Forecast } from '../../models/index';
import { IForecast } from '../../interfaces/index';
import { StorageService, DataService, ModelResService, ForecastService } from '../../services/index';

@Component({
   selector: 'wth-saved-city',
   templateUrl: './saved-city.component.html',
   styleUrls: ['./saved-city.component.scss']
})
export class SavedCityComponent implements OnInit {
   public forecast!: Forecast;
   @Input() location!: Location;
   @Input() wrapper!: HTMLElement;

   constructor(
      private storage: StorageService,
      private data: DataService,
      private model: ModelResService,
      private forecastS: ForecastService
   ) {
   }

   public deleteCity(): void {
      this.storage.delete(this.location);
   }

   public setForecast(forecast: Forecast): void {
      this.forecastS.setForecast(forecast, this.wrapper);
   }

   ngOnInit(): void {
      this.data.getResponse('forecast', `${this.location.name} ${this.location.region} ${this.location.country} ${this.location.lat}${this.location.lon}&days=3`)
         .subscribe(data => {
            this.forecast = this.model.modelForecast<IForecast>(Forecast, data);
         });
   }
}
