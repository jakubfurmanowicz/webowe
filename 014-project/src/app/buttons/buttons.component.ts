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
  current: number = 1;

  isError: boolean = true;
  errorColor: string = "black";
  url: string = "../assets/tickSymbol.png";

  counter: number = 0;

  iconImage: string = "../assets/informationIcon.jpg";

  statusText: string = "Status ok";

  firstStatus: boolean = true;

  secondStatus: boolean = true;

  thirdStatus: boolean = true;

  fourthStatus: boolean = true;


  trafficJam: string = "🚦";

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

  infoIcon() {
    this.iconImage = "../assets/informationIcon.jpg";
  }

  plusIcon() {
    this.iconImage = "../assets/plusIcon.png";
  }

  alertIcon() {
    this.iconImage = "../assets/alertIcon.png";
  }

  deleteIcon() {
    this.iconImage = "../assets/deleteIcon.png";
  }

  changeFirstStatus() {
    this.firstStatus = false;
  }

  changeSecondStatus() {
    this.secondStatus = false;
  }

  changeThirdStatus() {
    this.thirdStatus = false;
  }

  changeFourthStatus() {
    this.fourthStatus = false;
  }

  reset() {
    this.firstStatus = true;
    this.secondStatus = true;
    this.thirdStatus = true;
    this.fourthStatus = true;
  }

  addCar() {
    this.trafficJam += "🚗";
  }

  addPoliceCar() {
    this.trafficJam += "🚓";
  }

  addRacingCar() {
    this.trafficJam += "🏎️";
  }

  addSuv() {
    this.trafficJam += "🚙";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
