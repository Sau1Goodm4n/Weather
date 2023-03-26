import { ILocation } from '../interfaces/index';
export class Location implements ILocation {
   name;
   region;
   country;
   lat;
   lon;
   localTime;

   constructor(res: any) {

      this.name = res.name;
      this.region = res.region;
      this.country = res.country;
      this.lat = res.lat;
      this.lon = res.lon;
      this.localTime = res.localTime;
   }
}
