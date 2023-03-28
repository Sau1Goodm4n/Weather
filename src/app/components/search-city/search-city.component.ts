import { Component, Input } from '@angular/core';
import { Location } from '../../models/index';
import { StorageService, NavigationService } from '../../services/index';

@Component({
   selector: 'wth-search-city',
   templateUrl: './search-city.component.html',
   styleUrls: ['./search-city.component.scss']
})
export class SearchCityComponent {
   public errorMsg: string | null = null;

   @Input() city!: Location;

   constructor(
      private storage: StorageService,
      private navigation: NavigationService
   ) { }

   public addToSaved(obj: Location): void {
      if (!this.storage.addToStorage(obj)) {
         this.errorMsg = 'This city alredy exist in list';
         setTimeout(() => this.errorMsg = null, 5000)
      } else {
         this.navigation.navigate('/saved');
      }
   }

}
