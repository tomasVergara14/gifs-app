import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

  @ViewChild('tagInput')
  public newInput !:ElementRef<HTMLInputElement>

  constructor(){}

  serchInput():void{
    const newTag =  this.newInput.nativeElement.value
    console.log(newTag);
  }
}
