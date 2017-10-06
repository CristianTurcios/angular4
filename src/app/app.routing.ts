import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

//import Components
import { EmployeeComponent } from './components/employee/employee.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { CarComponent } from './components/car/car.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'fruta', component: FrutaComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'contact/:page', component: ContactComponent},
  {path: 'car', component: CarComponent},
  {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
