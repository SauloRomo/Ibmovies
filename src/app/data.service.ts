import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl:string = "http://localhost:4200/";
  constructor(private httpClient : HttpClient) { }
  get_products(){
    return this.httpClient.get<Array<object>>(this.baseUrl + '/assets/json/movies-f.json');
}
}
