import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-walidacja',
  templateUrl: './walidacja.component.html',
  styleUrls: ['./walidacja.component.css']
})
export class WalidacjaComponent implements OnInit {

  userName: string = "";
  password: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
