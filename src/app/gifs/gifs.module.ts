import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CardItemComponent } from './components/card-item/card-item.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box/search-box.component';



@NgModule({
  declarations: [
    CardItemComponent,
    CardListComponent,
    HomePageComponent,
    SearchBoxComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports:[
    CardListComponent,
    HomePageComponent,
    SearchBoxComponent,
  ]
})
export class GifsModule { }
