import { Component } from '@angular/core';
import { Car } from './car';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'cart',
  templateUrl: './car.component.html',
  providers: [RequestService]
})

export class CarComponent{
  public car:Car;
  private cars:Array<Car>;
  public articles;

  constructor(
    private _requestService: RequestService
  ){
    this.car = new Car('', '', '');
    this.cars = [ new Car('Toyota', '1800', 'Black')]
  }

  ngOnInit(){
    this._requestService.getArticles().subscribe(result => {
      this.articles = result;
      console.log('result', result);
    },
    error => {
      console.log('error', error);
    });
  }

  onSubmit(){
    this.cars.push(this.car);
    this.car = new Car('', '', '');
  }
}
