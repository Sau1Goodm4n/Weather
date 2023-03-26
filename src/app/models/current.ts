import { ICurrent } from '../interfaces/index';
export class Current implements ICurrent {
   temp;
   description;
   constructor(res: any) {
      this.temp = {
         temp: Math.trunc(res.current.temp_c),
         feelslike: Math.trunc(res.current.feelslike_c),
         windSpeed: Math.trunc(res.current.wind_kph),
         humidity: Math.trunc(res.current.humidity),
      }
      this.description = {
         text: res.current.condition.text,
         icon: res.current.condition.icon,
      }
   }
}