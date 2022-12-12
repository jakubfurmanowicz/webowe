import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.css']
})
export class ArraysComponent implements OnInit {

  names: string[] = ['Alex', 'Bob', 'Casey', 'Drake', 'Eevee'];
  filteredNames: string[] = ['Alex', 'Bob', 'Casey', 'Drake', 'Eevee'];

  newItem: string = "";
  errorCommunicate: string = "";

  search: string = "";

  numberOfIndex?: number;

  removeFirst() {
    this.names.shift();
  }

  removeLast() {
    this.names.pop();
  }

  add() {
    if (this.newItem == "") {
      this.errorCommunicate = "*Pole wymagane";
    }
    else {
      this.names.push(this.newItem);
      this.newItem = "";
    }
  }

  sort() {
    this.names.sort((a, b) => {
      a = a.toLocaleLowerCase();
      b = b.toLocaleLowerCase();

      if (a > b)
        return 1;
      else if (a < b)
        return -1;
      else
        return 0;
    });
  }

  reverse() {
    this.names.reverse();
  }

  filter() {
    //this.filteredNames = this.names.filter(name => name.includes(this.search));
    this.filteredNames = this.names.filter(name => name.toLocaleLowerCase().includes(this.search));
  }

  removeByIndex() {
    if (this.numberOfIndex)
      this.names.splice(this.numberOfIndex - 1, 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
