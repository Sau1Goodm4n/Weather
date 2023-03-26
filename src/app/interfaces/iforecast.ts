import { ICurrent, IForecastDay, ILocation } from './index';
export interface IForecast {
   current: ICurrent;
   location: ILocation;
   forecast: IForecastDay[];
}
