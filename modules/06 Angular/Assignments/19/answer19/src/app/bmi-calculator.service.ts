import { Injectable } from '@angular/core';
import { bmiInterface } from './bmi.model';

@Injectable({
  providedIn: 'root'
})
export class BmiCalculatorService {

  constructor() { }

  public bmiCalc(pair:bmiInterface):number {

    return +pair.miskal/ Math.pow(+pair.gova/100,2);
  }
}
