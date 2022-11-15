import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  name: string = "Kuba";
  age: number = 18;
  isStudent: boolean = false;
  day: string = "2022-09-27 10:00";

  constructor() { }

  ngOnInit(): void {
  }

}
