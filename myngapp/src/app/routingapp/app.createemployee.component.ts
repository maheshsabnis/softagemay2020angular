import {Component , OnInit} from '@angular/core';
import {Employee, Departments} from './../models/app.employee.model';
import {Logic} from './../models/app.logic';
import { Router } from '@angular/router';
@Component({
  selector: 'app-createemployee-component',
  templateUrl: './app.createemployee.view.html'
})
export class CreateEmployeeComponent implements OnInit {
  emp: Employee;
  emps: Array<Employee>;
  private logic: Logic;
  headers: Array<string>;
  depts =  Departments;
  constructor(private router: Router) {
     this.emp = new Employee(0, '', '', 0);
     this.emps = new Array<Employee>();
     this.logic = new Logic();
  }
  ngOnInit(): void {
  }
  clear() : void {
    this.emp = new Employee(0, '', '', 0);
  }
  save(): void {
    this.emps = this.logic.saveEmployee(this.emp);
    console.log(`Data in Employees Array ${JSON.stringify(this.emps)}`);
    this.router.navigate(['']);
  }
}
