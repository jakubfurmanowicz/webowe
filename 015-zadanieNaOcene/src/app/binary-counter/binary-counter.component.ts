import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binary-counter',
  templateUrl: './binary-counter.component.html',
  styleUrls: ['./binary-counter.component.css']
})
export class BinaryCounterComponent implements OnInit {

  counter: number = 1;

  lessMemory() {
    if (this.counter > 1) {
      this.counter = this.counter / 2;
    }

  }

  MoreMemory() {
    if (this.counter < 64) {
      this.counter = this.counter * 2;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
