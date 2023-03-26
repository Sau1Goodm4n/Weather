import { Component, Input } from '@angular/core';
import { Location } from '../../models/index';
import { StorageService } from '../../services/index';

@Component({
   selector: 'wth-search-city',
   templateUrl: './search-city.component.html',
   styleUrls: ['./search-city.component.scss']
})
export class SearchCityComponent {

   @Input() city!: Location;

   constructor(
      private storage: StorageService,
   ) { }

   public addToSaved(obj: Location): void {
      this.storage.addToStorage(obj)
   }





}
