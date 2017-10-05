import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

//import Components
import { EmployeeComponent } from './components/employee/employee.component';
import { FrutaComponent } from './components/fruta/fruta.component';

const appRoutes: Routes = [
  {path: '', component: EmployeeComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'fruta', component: FrutaComponent},
  {path: '**', component: EmployeeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
