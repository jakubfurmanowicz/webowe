import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = '013-AngularWstep';
  name: string = 'Krzysztof';
  age: number = 18;
  isPresent: boolean = false;
  toggle() {
    this.isPresent = !this.isPresent;
  }
}
