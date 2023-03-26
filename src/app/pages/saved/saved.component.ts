import { Component } from '@angular/core';

import { StorageService, NavigationService } from '../../services/index';
import { Location } from '../../models/index';

@Component({
   selector: 'wth-saved',
   templateUrl: './saved.component.html',
   styleUrls: ['./saved.component.scss']
})
export class SavedComponent {
   public list: Location[] = [];

   constructor(
      private storage: StorageService,
      private navigation: NavigationService
   ) {
      this.list = this.storage.list
   }

   public navigate(url: string): void {
      this.navigation.navigate(url);
   }
}
