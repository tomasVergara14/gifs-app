import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];

  constructor() { }

  get tagsHistory(){
    return this._tagsHistory;
  }

  private organizeTags( tag: string ){
      tag = tag.toLowerCase();            // JS is case sensitive

      if(this._tagsHistory.includes(tag)){
        this._tagsHistory = this._tagsHistory.filter(oldTag => oldTag != tag) //returns the one that are diferent from the one being search
      }
      this._tagsHistory.unshift(tag);

      this._tagsHistory = this._tagsHistory.splice(0,10);
  }

  public searchTags( tag: string):void{

    if(tag.length === 0 ) return;  // Validate if there is a search
    
    this.organizeTags(tag);
  }

}
