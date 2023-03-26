import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { SearchCityComponent } from './search-city/search-city.component';
import { NavComponent } from './nav/nav.component';
import { SavedCityComponent } from './saved-city/saved-city.component';
import { ForecastByDayComponent } from './forecast-by-day/forecast-by-day.component';
import { ForecastByHourComponent } from './forecast-by-hour/forecast-by-hour.component';



@NgModule({
   declarations: [NavComponent, SearchCityComponent, SavedCityComponent, ForecastByHourComponent, ForecastByDayComponent],
   imports: [
      CommonModule,
      ComponentsRoutingModule
   ],
   exports: [NavComponent, SearchCityComponent, SavedCityComponent, ForecastByHourComponent, ForecastByDayComponent],
})
export class ComponentsModule { }
