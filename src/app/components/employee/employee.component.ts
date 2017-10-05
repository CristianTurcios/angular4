import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
    selector: 'employee',
    templateUrl: './employee.component.html'
})

export class EmployeeComponent{
  public title:string = 'Title of component employee';
  public flagValue:boolean;
  public employee:Employee;
  public workers:Array<Employee>;
  public color:string;
  public selectedColor:string;
  constructor(){
    this.color = 'red';
    this.selectedColor = 'white';
    this.flagValue = true;
    this.employee = new Employee('Cristian Turcios', 24, 'Systems Engineer');
    this.workers = [
      new Employee('Javier Turcios', 24, 'Systems Engineer'),
      new Employee('Jonhatan Turcios', 18, 'Nursery'),
      new Employee('Dana Paola', 13, 'Home worker')
    ];
  }

  changeFlagValue(value){
    this.flagValue = !value;
  }
}
