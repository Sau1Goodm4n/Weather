import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SavedComponent } from '../pages/saved/saved.component';
import { SearchComponent } from '../pages/search/search.component';

const routes: Routes = [
   { path: '', redirectTo: 'saved', pathMatch: 'full' },
   { path: 'search', component: SearchComponent },
   { path: 'saved', component: SavedComponent },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class ComponentsRoutingModule { }
