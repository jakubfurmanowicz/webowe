import { Component } from '@angular/core';
import { ChemicalElement } from './models/chemical-element';
import { ChemicalElementService } from './services/chemical-element.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '022-chemia';

  elements: ChemicalElement[] = [];
  current?: ChemicalElement;

  constructor(private service: ChemicalElementService)
  {
    service.getElement().subscribe(data => {
      this.elements = data;
      this.current = this.elements[0];
    });
  }
}
