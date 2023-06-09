import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardItemComponent } from './components/card-item/card-item.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    CardItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent
  ]
})
export class GifsModule { }
