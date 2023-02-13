import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Webstudent } from '../models/webstudent';

@Injectable({
  providedIn: 'root'
})
export class WebstudentService {

  constructor(private http: HttpClient) { }
  
  getStudents(): Observable<Webstudent[]>
  {
    return this.http.get<Webstudent[]>("http://localhost:3000/students")
  }

  getStudent(id: number): Observable<Webstudent>
  {
    return this.http.get<Webstudent>("http://localhost:3000/students/" + id);
  }
}
