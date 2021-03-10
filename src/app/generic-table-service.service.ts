import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// making GenericTableServiceService class to use as service
export class GenericTableServiceService {

  constructor(private http:HttpClient ) { }

  // country api to fetch the country data vie Http call
  public fetchUserApi(){
     return this.http.get("https://corona.lmao.ninja/v3/covid-19/countries");
  }
}
