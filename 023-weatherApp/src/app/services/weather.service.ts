import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCoord(city:string)
  {
    return this.http.get<any>(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=1c3a0b4b442ce2bf296201d762f58ba1`);
  }

  getWeather(lat: number, lon: number)
  {
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=1c3a0b4b442ce2bf296201d762f58ba1`)
  }
}
