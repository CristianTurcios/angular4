import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { employee } from './components/employee/employee';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    employee
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
