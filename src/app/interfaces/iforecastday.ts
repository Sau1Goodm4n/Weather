import { IForecastHour } from './index';
export interface IForecastDay {
   hour: IForecastHour[];
   maxtemp: number;
   mintemp: number;
   avgtemp: number;
   avghumidity: number;
   text: string;
   icon: string;
   date: string;
}
