import { Component } from '@angular/core';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '016-toDo';
  newTask: string = "";

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
  addTask() {
    this.tasks.push(
      {
        description: this.newTask,
        isDone: false
      }
    );
    this.newTask = "";
  }

  removeDone() {
    this.tasks = this.tasks.filter(task => !task.isDone);
  }

  save() {
    let json = JSON.stringify(this.tasks);
    localStorage.setItem('my-to-do-list', json);
  }

  load() {
    let json = localStorage.getItem('my-to-do-list');
    if (json)
      this.tasks = JSON.parse(json);
  }
}
