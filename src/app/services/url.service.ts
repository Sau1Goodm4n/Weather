import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'


@Injectable({
   providedIn: 'root'
})
export class UrlService {

   private readonly token: string = 'ba76119756644c27a88182428231703';
   private readonly baseURL: string = 'https://api.weatherapi.com/v1/';

   constructor() { }

   getURL(method: string): string {
      return `${this.baseURL + method}?key=${this.token}`;
   }
}
