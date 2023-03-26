import { IForecastHour } from '../interfaces/index';
export class ForecastHour implements IForecastHour {
   time;
   temp;
   feelslike;
   text;
   icon;
   constructor(res: any) {
      this.time = res.time;
      this.temp = Math.trunc(res.temp_c);
      this.feelslike = Math.trunc(res.feelslike_c);
      this.text = res.condition.text;
      this.icon = res.condition.icon;
   }
}
