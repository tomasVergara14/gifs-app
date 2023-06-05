import { Component } from '@angular/core';
import { Gifs } from '../../interfaces/gifs.interface';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  
  constructor(
    private gifsService: GifsService,
  ){

  }
  get gifs(): Gifs[]{
    return this.gifsService.gifsList;
  }
}
