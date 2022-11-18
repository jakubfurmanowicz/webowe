import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  url: string = "../assets/git-logo.png";
  warningColor: string = "salmon";
  isError: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
