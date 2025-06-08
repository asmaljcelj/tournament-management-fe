import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel, Hotels } from '../pages/service/product.service';
import { Countries } from '../pages/service/country.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getHotels(): Observable<Hotels> {
    console.log('calling');
    return this.http.get<Hotels>(this.apiUrl + 'hotel');
  }

  createHotel(hotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(this.apiUrl + 'hotel', hotel);
  }

  editHotel(hotel: Hotel): Observable<Hotel> {
    return this.http.put<Hotel>(this.apiUrl + 'hotel/' + hotel.id, hotel);
  }

  deleteHotel(hotel: Hotel): Observable<any> {
    console.log('deleteing');
    console.log(hotel);
    return this.http.delete(this.apiUrl + 'hotel/' + hotel.id);
  }

  getCountries1(): Observable<Countries> {
    console.log('countries GET');
    return this.http.get<Countries>(this.apiUrl + 'country');
  }
}
