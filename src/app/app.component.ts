import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SDA Front-end practice';
  toShow = true;

  fruits = ["apple", "banana", "mango", "strawberry"];

  showAlertBox() {
    alert("Click me is clicked!");
  }

  doggies = ["doberman", "taxi", "huskie", "german sheppard"];

  doggieAlert() {
    alert("Whoof-whoof!");
  }

  doggiesAlertBox() {
    alert("Who let the dogs out?");
  }

  addNew(){

  }

}
