import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Para poder usar el two ways data binding
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { EmployeeComponent } from './components/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
