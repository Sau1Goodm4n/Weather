import { IForecast } from '../interfaces/index';
import { Current, ForecastDay, Location } from './index';

export class Forecast implements IForecast {
   current;
   forecast;
   location;
   constructor(res: any) {
      this.location = new Location(res.location)

      this.current = new Current(res);

      let arr = [];
      for (const day of (res.forecast.forecastday as any[])) {
         arr.push(new ForecastDay(day));
      }
      this.forecast = arr;
   }
}
