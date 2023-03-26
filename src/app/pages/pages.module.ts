import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from './search/search.component';
import { SavedComponent } from './saved/saved.component';

import { ComponentsModule } from '../components/components.module';
import { ForecastComponent } from './forecast/forecast.component';


@NgModule({
   declarations: [SearchComponent, SavedComponent, ForecastComponent],
   imports: [
      CommonModule,
      ComponentsModule
   ],
   exports: [SearchComponent, SavedComponent, ForecastComponent],
})
export class PagesModule { }
