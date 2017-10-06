import { Component } from '@angular/core';
import { Car } from './car';

@Component({
  selector: 'cart',
  templateUrl: './car.component.html'
})

export class CarComponent{
  public car:Car;
  private cars:Array<Car>;

  constructor(){
    this.car = new Car('', '', '');
    this.cars = [ new Car('Toyota', '1800', 'Black')]
  }

  onSubmit(){
    this.cars.push(this.car);
    this.car = new Car('', '', '');
  }
}
