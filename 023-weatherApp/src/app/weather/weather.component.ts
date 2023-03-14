import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  lat: number = 0;
  lon: number = 0;
  name: string = "";
  cityName: string = "";
  temperature: number = 0;
  humidity: number = 0;
  
  constructor(private service: WeatherService) 
  {
    this.service.getCoord('Liverpool').subscribe(data => {
      this.name = data[0].name;
      this.lat = data[0].lat;
      this.lon = data[0].lon;
      this.service.getWeather(this.lat, this.lon).subscribe(data => {
        console.log(data);
        this.temperature = Math.round(data.main.temp);
        this.humidity = data.main.humidity;
      });
    });
  }

  change()
  {
    this.service.getCoord(this.cityName).subscribe(data => {
      this.name = data[0].name;
      this.lat = data[0].lat;
      this.lon = data[0].lon;
      this.service.getWeather(this.lat, this.lon).subscribe(data => {
        console.log(data);
        this.temperature = Math.round(data.main.temp);
        this.humidity = data.main.humidity;
      });
    });
  }


  ngOnInit(): void {
  }

}
