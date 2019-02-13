
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PlaceOrderService {
  url = 'https://api.openweathermap.org/data/2.5/forecast';
  params = {
    q: 'Amsterdam',
    cnt: '8',
    units: 'metric',
    APPID: '010721642521f31b0fbc8c3831d45951'
  };

  constructor(private http: HttpClient) { }

  placeOrder(form: any): Observable<any> {
    // implement the service
    this.params.q = form.name;
    return this.http.get(this.url, { params: this.params });
  }

}

