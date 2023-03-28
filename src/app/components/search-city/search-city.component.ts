import { Component, Input } from '@angular/core';
import { Location } from '../../models/index';
import { StorageService, NavigationService } from '../../services/index';

@Component({
   selector: 'wth-search-city',
   templateUrl: './search-city.component.html',
   styleUrls: ['./search-city.component.scss']
})
export class SearchCityComponent {

   @Input() city!: Location;

   constructor(
      private storage: StorageService,
      private navigation: NavigationService
   ) { }

   public addToSaved(obj: Location): void {
      this.storage.addToStorage(obj);
      this.navigation.navigate('/saved');
   }

}
