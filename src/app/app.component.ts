import { Component, OnInit } from '@angular/core';

import { ForecastService, NavigationService } from './services/index';


@Component({
   selector: 'wth-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   constructor(
      public forecastS: ForecastService,
      private navigation: NavigationService
   ) { }
   ngOnInit(): void {
      this.navigation.navigate('');
   }

}
