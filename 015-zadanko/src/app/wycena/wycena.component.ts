import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wycena',
  templateUrl: './wycena.component.html',
  styleUrls: ['./wycena.component.css']
})
export class WycenaComponent implements OnInit {

  hdRendering: number = 0;
  hdRenderingPrice: number = 0;
  shortAnimationRendering: number = 0;
  shortAnimationRenderingPrice: number = 0;
  longAnimationRendering: number = 0;
  longAnimationRenderingPrice: number = 0;
  finalPrice: number = 0;

  checkPrice() {
    this.hdRenderingPrice = this.hdRendering * 0.1;
    this.shortAnimationRenderingPrice = this.shortAnimationRendering * 0.25;
    this.longAnimationRenderingPrice = this.longAnimationRendering * 0.5;

    this.finalPrice = this.hdRenderingPrice + this.shortAnimationRenderingPrice + this.longAnimationRenderingPrice;
    //this.finalPrice *= 10;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
