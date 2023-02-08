import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { Teacher } from '../models/teacher';
import { TeacherRole } from '../models/teacher-role';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.css']
})
export class ObjectComponent implements OnInit {

  // Prosty obiekt 
  alex = {
    firstName: 'Alex',
    lastName: 'Andrews',
    age: 18
  }

  bob = {
    firstName: 'Alex',
    lastName: 'Andrews',
    age: 18
  };

  getJson() {
    return JSON.stringify(this.alex);
  }

  getBob() {
    this.bob = JSON.parse('{"firstName": "Bob", "lastName": "Berrry", "age": 15}');
  }

  constructor() { this.getBob() }

  ngOnInit(): void {
  }

  students: Student[] = 
  [
    {
      firstName: "Alex",
      lastName: "Andrew",
      age: 15,
      avarage: 4.75,
      isLeader: true
    },
    {
      firstName: "Benjamin",
      lastName: "Bronx",
      age: 15,
      avarage: 4.5,
      isLeader: false
    },
    {
      firstName: "Casey",
      lastName: "Lindenmayer",
      age: 16,
      avarage: 5,
      isLeader: false
    },
    {
      firstName: "Marshal",
      lastName: "Matters",
      age: 16,
      avarage: 5.1,
      isLeader: false
    },
  ];
  teachers: Teacher[] =
    [
      {
        firstName: "John",
        lastName: "Doe",
        role: TeacherRole.Principal,
        subjects: ["matematyka", " fizyka"],
        room: 101
      },
      {
        firstName: "Jane",
        lastName: "Doe",
        role: TeacherRole.Assistant,
        subjects: ["geografia"],
        room: 200
      },
      {
        firstName: "Larry",
        lastName: "Pierce",
        role: TeacherRole.Teacher,
        subjects: ["polski"],
        room: 300
      },
      {
        firstName: "Random",
        lastName: "Names",
        role: TeacherRole.Trainee,
        subjects: ["wf"],
        room: 300
      },
    ];

  getStudentsJson() {
    return JSON.stringify(this.students);
  }

  getTeacherJson() {
    return JSON.stringify(this.teachers);
  }

}
