import { Component, OnInit } from '@angular/core';
import { Webstudent } from '../models/webstudent';
import { WebstudentService } from '../services/webstudent.service';

@Component({
  selector: 'app-webstudents',
  templateUrl: './webstudents.component.html',
  styleUrls: ['./webstudents.component.css']
})
export class WebstudentsComponent implements OnInit {

  students: Webstudent[] = [];

  constructor(private webstudentService: WebstudentService) { }

  ngOnInit(): void {
    this.webstudentService.getStudents().subscribe(data => this.students = data);
  }

}
