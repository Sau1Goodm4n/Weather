import { IForecastDay } from '../interfaces/index';
import { ForecastHour } from './index';
export class ForecastDay implements IForecastDay {
   hour;
   maxtemp;
   mintemp;
   avgtemp;
   avghumidity;
   text;
   icon;
   date;

   constructor(res: any) {
      let arr = []
      for (const h of (res.hour as any[])) {
         arr.push(new ForecastHour(h))
      }
      this.hour = arr;

      this.date = res.date;
      this.maxtemp = Math.trunc(res.day.maxtemp_c);
      this.mintemp = Math.trunc(res.day.mintemp_c);
      this.avgtemp = Math.trunc(res.day.avgtemp_c);
      this.avghumidity = Math.trunc(res.day.avghumidity);
      this.text = res.day.condition.text;
      this.icon = res.day.condition.icon;
   }
}
