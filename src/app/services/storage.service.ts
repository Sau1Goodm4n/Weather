import { Injectable } from '@angular/core';

import { Location } from '../models/index';


@Injectable({
   providedIn: 'root'
})
export class StorageService {

   public list: Location[];
   constructor() {
      this.list = this.get();
   }


   public get(): Location[] {
      let list = localStorage.getItem('saved');
      return list !== null ? JSON.parse(list) : [];
   }

   public addToStorage(forecast: Location): void {
      if (this._isInArray(forecast, this.list)) return;

      this.list.push(forecast);

      this._uploadStorage(this.list);
   }

   private _isInArray(el: any, list: Location[]): boolean {
      let isIn: boolean = false;
      if (list.find(item => item.lat === el.lat && item.lon === el.lon)) isIn = true;
      return isIn;
   }

   public delete(forecast: Location): void {
      const index = this.list.indexOf(forecast);
      this.list.splice(index, 1);
      this._uploadStorage(this.list);
   }

   private _uploadStorage(list: Location[]): void {
      localStorage.setItem('saved', JSON.stringify(list));
   }

}
