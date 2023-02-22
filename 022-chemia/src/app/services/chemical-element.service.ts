import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChemicalElement } from '../models/chemical-element';

@Injectable({
  providedIn: 'root'
})
export class ChemicalElementService {

  constructor(private http: HttpClient) 
  { 

  }

  getElement(): Observable<ChemicalElement[]>
  {
    return this.http.get<ChemicalElement[]>("http://localhost:3000/elements");
  }
}
