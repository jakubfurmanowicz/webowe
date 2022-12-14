import { Component } from '@angular/core';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '016-toDo';

  tasks: Task[] =
    [
      {
        description: "Zainstalować VS",
        isDone: false
      },
      {
        description: "Poprawiać bugi",
        isDone: false
      },
      {
        description: "Zrobić nową wersję apki v1.19",
        isDone: false
      },
      {
        description: "Dodać nową grafikę",
        isDone: false
      },
      {
        description: "Zrobić commita",
        isDone: false
      },
    ];
}
