import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root'
})
export class ModelResService {

   constructor() { }

   public modelSearch<I>(model: { new(item: object): I }, res: object[]): I[] {
      const models: I[] = [];
      for (const data of res) {
         models.push(new model(data))
      }
      return models;
   }

   public modelForecast<I>(model: { new(item: object): I }, res: object): I {
      return new model(res);
   }
}
