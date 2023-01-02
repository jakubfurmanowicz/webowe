import { Component } from '@angular/core';
import { Grade } from './models/grade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '017-oceny';
  isError: boolean = false;
  avarageOfGrades: number = 0;
  result: number = 0;

  constructor() {
    this.calculate();
  }


  grades: Grade[] = [
    {
      subjectName: "Religia",
      grade: 5,
      obligatory: false
    },
    {
      subjectName: "Polski",
      grade: 5,
      obligatory: true
    },
    {
      subjectName: "Niemiecki",
      grade: 5,
      obligatory: true
    },
    {
      subjectName: "Angielski",
      grade: 5,
      obligatory: true
    },
    {
      subjectName: "Matematyka",
      grade: 5,
      obligatory: true
    },
    {
      subjectName: "Fizyka",
      grade: 5,
      obligatory: true
    },
    {
      subjectName: "Chemia",
      grade: 5,
      obligatory: true
    },
    {
      subjectName: "Historia",
      grade: 5,
      obligatory: true
    },
    {
      subjectName: "Biologia",
      grade: 5,
      obligatory: true
    },
    {
      subjectName: "Geografia",
      grade: 5,
      obligatory: true
    },
    {
      subjectName: "Informatyka",
      grade: 5,
      obligatory: true
    },
    {
      subjectName: "Wychowanie Fizyczne",
      grade: 5,
      obligatory: true
    },
  ];

  calculate() {
    this.avarageOfGrades = 0;
    for (let grade of this.grades) {
      this.avarageOfGrades = this.avarageOfGrades + grade.grade;
    }
    this.result = this.avarageOfGrades / 12;
  }

}
