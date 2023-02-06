import { Injectable } from '@angular/core';
import { Donut } from '../models/donut';

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  donuts: Donut[]=
  [
    {
      name: "Donut czekoladowy",
      url: "assets/images/donutCzekoladowy.jpg",
      price: 3.20
    },
    {
      name: "Donut orzechowy",
      url: "assets/images/donutOrzechowy.png",
      price: 3.20
    },
    {
      name: "Donut truskawkowy",
      url: "assets/images/donutTruskawkowy.jpg",
      price: 3.40
    },
    {
      name: "Donut cukierkowy",
      url: "assets/images/donutCukierkowy.jpg",
      price: 3.50
    },
    {
      name: "Donut jagodowy",
      url: "assets/images/donutJagodowy.jpg",
      price: 3.50
    },
    {
      name: "Donut zebra",
      url: "assets/images/donutZebra.jpg",
      price: 4.00
    },
  ]

  constructor() { }

  getDonuts()
  {
    return this.donuts;
  }
}
