import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  name: string = "Alex"
  student: boolean = false;

  names = ["Alex", "Bob", "Casey", "Drake", "Eevee"];
  current: number = 0;

  isError: boolean = true;
  errorColor: string = "black";
  url: string = "../assets/tickSymbol.png";

  counter: number = 0;

  changeName() {
    this.name = this.names[this.current];
    this.current++;
    if (this.current >= this.names.length)
      this.current = 0;
  }

  changeStudent() {
    this.student = !this.student;
  }

  changeError() {
    if (this.isError == false) {
      this.errorColor = "black";
      this.url = "../assets/tickSymbol.png";
      this.isError = true;
    }
    else {
      this.errorColor = "red";
      this.url = "../assets/xSymbol.png";
      this.isError = false;
    }
  }



  constructor() { }

  ngOnInit(): void {
  }

}
