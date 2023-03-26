import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs'


import { DataService, ModelResService, StorageService } from '../../services/index';
import { Location, Forecast } from '../../models/index';
import { ILocation, IForecast } from '../../interfaces/index';

@Component({
   selector: 'wth-search',
   templateUrl: './search.component.html',
   styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnDestroy {
   private _subscription!: Subscription;

   public isDirty: boolean = false;

   public citys: ILocation[] | null = null;

   public errorMsg: string | null = null;

   constructor(
      private data: DataService,
      private modelRes: ModelResService,
   ) { }

   public search(e: HTMLInputElement) {
      this.citys = null;

      if (!e.value) {
         this.errorMsg = 'Please enter name of your city';
         return;
      }

      this._subscription = this.data.getResponse('search', e.value)
         .subscribe(data => {
            this.citys = this.modelRes.modelSearch<ILocation>(Location, (data as object[]));
            if (this.citys.length === 0) {
               this.citys = null;
               this.errorMsg = 'You entered wrong city name, try again';
            }
            else if (this.errorMsg) this.errorMsg = null;
         })
   }

   public showReset(inp: HTMLInputElement): void {
      if (inp.value.length === 0) this.isDirty = false;
      else this.isDirty = true;
   }

   public resetInput(inp: HTMLInputElement): void {
      if (this.isDirty) inp.value = '';
      this.showReset(inp)
   }

   ngOnDestroy(): void {
      if (this._subscription) this._subscription.unsubscribe();
   }
}
