import { Component, OnInit } from '@angular/core';
import { Donut } from '../models/donut';
import { DonutService } from '../service/donut.service';

@Component({
  selector: 'app-donut-component',
  templateUrl: './donut-component.component.html',
  styleUrls: ['./donut-component.component.css']
})
export class DonutComponentComponent implements OnInit {

  donuts:Donut[];

  constructor(private donutService: DonutService)
  { 
    this.donuts = donutService.getDonuts();
  }

  ngOnInit(): void {
  }

}
