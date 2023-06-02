import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

  @ViewChild('tagInput')
  public newInput !:ElementRef<HTMLInputElement>

  constructor( private gifsService: GifsService ){}

  serchInput():void{
    const newTag =  this.newInput.nativeElement.value
    
    this.gifsService.searchTags(newTag);

    this.newInput.nativeElement.value = '';
  }
}
