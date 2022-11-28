import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computer-parameters',
  templateUrl: './computer-parameters.component.html',
  styleUrls: ['./computer-parameters.component.css']
})
export class ComputerParametersComponent implements OnInit {

  cpu: string = "Intel Core i5";
  ram: number = 8;
  ssd: number = 240;
  gpu: string = "GeForce RTX 4080";
  price: number = 2499;

  constructor() { }

  ngOnInit(): void {
  }

}
