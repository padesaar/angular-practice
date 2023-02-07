import {Component, OnInit} from '@angular/core';
import {Dog} from "./dog/models/Dog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
      this.doggies = this.fetchDoggos();
  }
  title = 'SDA Front-end practice';
  toShow = true;

  fruits = ["apple", "banana", "mango", "strawberry"];

  showAlertBox() {
    alert("Whoof-whoof!");
  }

  //doggies = ["doberman", "taxi", "huskie", "german sheppard"];

 // doggieAlert() {
  //  alert("Whoof-whoof!");
 // }


  doggies: Dog[] = [];
  dogNames: string [] = ['Caesar', 'Scooby', 'Shadow'];

  fetchDoggos(): Dog[] { //function return dog array
    let doggos: Dog[] = [];
    doggos.push(new Dog('Jack', 'Dober', 'Runs faster'));
    doggos.push(new Dog('Julie', 'German Shepperd', 'Eats well'));

    return doggos;

}

  addDog() {
    let dogName = this.dogNames.at(Math.floor(Math.random() * this.dogNames.length));
    // @ts-ignore
    this.dogNames.push(new Dog(dogName, 'Dalmian', 'Barks louder'));
}

}
