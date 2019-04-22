import { Component } from '@angular/core';
import { BmiCalculatorService } from './bmi-calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  result: number;

  constructor(private bmiSrv: BmiCalculatorService) {
    this.result = 0;
  }

  calc(event : Event, he:number ,we:number ){
    event.preventDefault();
    this.result = this.bmiSrv.bmiCalc({gova:he,miskal:we});

  }

}
