import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UrlService } from './index';

@Injectable({
   providedIn: 'root'
})
export class DataService {

   constructor(
      private http: HttpClient,
      private url: UrlService
   ) { }

   public getResponse(method: string, query: string): Observable<object> {
      const URL: string = `${this.url.getURL(`${method}.json`)}&q=${query}`;
      return this.http.get(URL);
   }
}
