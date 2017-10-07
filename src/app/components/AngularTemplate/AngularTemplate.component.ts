import { Component } from '@angular/core';

@Component({
  selector: 'angular-template',
  templateUrl: './AngularTemplate.component.html',
})

export class AngularTemplateComponent{
  public title:string;
  public admin:boolean;
  constructor(){
    this.title = 'template ngTemplate in angular';
    this.admin = true;
  }

  changeValue(admin){
    this.admin = !admin;
  }
}
