import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gifs, SearchData } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifsList: Gifs[] = [];

  private _tagsHistory: string[] = [];
  private apiKeyGifs: string= 'iiSsDyvMlztSUKHnJcCShaR2hilNgSAS';
  private apiUrl: string = 'http://api.giphy.com/v1/gifs/search'


  constructor(
    private httpClient: HttpClient
  ) { }

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

    const params = new HttpParams()
    .set('api_key', this.apiKeyGifs )
    .set('q', tag )
    .set('limit', '10' )

    this.httpClient.get<SearchData>( this.apiUrl,{ params }).subscribe(data=>{
      this.gifsList = data.data
    })
  }

}
