import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Para poder usar el two ways data binding
import { FormsModule} from '@angular/forms';
//Para que funcionen nuestras rutas
import {routing, appRoutingProviders} from './app.routing';
//Para que funcione el Http
import { HttpModule } from '@angular/http';
//Components
import { AppComponent } from './app.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { CarComponent } from './components/car/car.component';
import { AngularTemplateComponent } from './components/AngularTemplate/AngularTemplate.component';

//Pipes
import { ConvertPipe } from './pipes/convert.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmployeeComponent,
    HomeComponent,
    ContactComponent,
    CarComponent,
    AngularTemplateComponent,
    ConvertPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
