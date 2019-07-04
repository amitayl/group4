import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Car } from './car.module';
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  addCarForm: NgForm;
  url: string;
  carDetail: Car;

  constructor() {
    this.url = "http://localhost:5000/cars";
  }

  addCarSubmit(e:Event, f: NgForm) {
    
    e.preventDefault();
    this.addCarForm = f;

    fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.addCarForm.value)
    });
  }

  displayCarDetailesByLicense(f: NgForm, e: Event) {
    e.preventDefault();
    const liecense = f.value.LicenseNumber;
  
    const getByLicense = this.url + '/' + liecense;
    
    
    // fetch(getByLicense)
    // .then (d)
    
    // this.carDetail =

  }


}
