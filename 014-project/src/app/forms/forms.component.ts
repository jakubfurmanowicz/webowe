import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  team1: string = "Foczki";
  team2: string = "Mrówki";
  team1clicked: string = "";
  team2clicked: string = "";

  fruit: string = "red";
  nick: string = "";

  teoria: number = 0;
  praktyka: number = 0;

  showRules: boolean = false;

  bauble: string = "";

  changeTeams() {
    this.team1clicked = this.team1;
    this.team2clicked = this.team2;
  }



  constructor() { }

  ngOnInit(): void {
  }

}
