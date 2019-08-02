import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {

  constructor(private http: HttpClient) { }

  public getRestaurantes(){
    return this.http.get('http://localhost:3000/restaurants');
  }
}
