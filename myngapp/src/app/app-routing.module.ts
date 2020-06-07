import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeesComponent } from './routingapp/app.listemployees.component';
import { CreateEmployeeComponent } from './routingapp/app.createemployee.component';
import { EditEmployeeComponent } from './routingapp/app.editemployee.component';
import { ListDepartmentsComponent } from './components/childcomponentforroute/app.listdepartments.component';
import { FeatureModule } from '../lib/app.shared.module';


// define route table
const routes: Routes = [
  {path: '', component: ListEmployeesComponent},
  {path: 'create', component: CreateEmployeeComponent,
     children: [ // the sub-routing or child-routing
       {path: 'depts', component: ListDepartmentsComponent}
     ]},
  {path: 'edit/:id', component: EditEmployeeComponent},
  {path: 'lazy', loadChildren:
  () => import('./../lib/app.shared.module')
  .then(m => m.FeatureModule)},
  {path: '**', redirectTo: ''} // for any other URI that create/edit
  // it will redirect to the default i.e. ListEmployeesComponent
];

@NgModule({
  // the route table is registered at application level
  // using forRoot() method
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // wheerever the
  // AppRoutingModule is imported the RouterModule will be
  // loaded
})
export class AppRoutingModule { }
