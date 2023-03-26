import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root'
})
export class ImgService {

   constructor() { }

   public get(url: string): string {
      let image: HTMLImageElement = new Image()
      image.src = url;

      return image ? url : `../../.${url}`;
   }
}
