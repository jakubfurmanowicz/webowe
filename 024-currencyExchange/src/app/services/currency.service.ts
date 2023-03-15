import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  getCurrency(from:string, to:string)
  {
    return this.http.get<any>(`https://api.exchangerate.host/convert?from=${from}&to=${to}`);
  }
}
