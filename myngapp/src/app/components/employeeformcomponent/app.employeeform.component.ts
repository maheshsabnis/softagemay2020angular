import {Component , OnInit} from '@angular/core';
import {Employee, Departments} from './../../models/app.employee.model';
import {Logic} from './../../models/app.logic';
@Component({
  selector: 'app-employeeform-component',
  templateUrl: './app.employeeform.view.html'
}) // OnInit: Is the interface that is used to managed Lifecycle of Component
// OnInit interface has ngOnInit() method, this will be invoked automatically
// immediately after the constructor and the Changes on Component's propeties
export class EmployeeFormComponent implements OnInit {
  emp: Employee;
  emps: Array<Employee>;
  private logic: Logic;
  headers: Array<string>;
  depts =  Departments; // constant array is stored in public member of component
  tax: number;
  constructor() {
     this.emp = new Employee(0, '', '', 0);
     this.emps = new Array<Employee>();
     this.logic = new Logic();
     this.headers  =new Array<string>();
     this.tax = 0;
  }
  // write all such operations in this method those we cannot afford to write
  // in constructor
  ngOnInit(): void {
    // read each property from the Employee class from its 'emp' object
    // and add these property names in headers array using Refelction
    for(let p in this.emp) {
      this.headers.push(p);
    }
    console.log(this.headers);
    this.emps = this.logic.getEmployees();
  }
  calculateTax(sal: number): number {
     this.tax = sal * 0.2;
     return this.tax;
  }
  clear() : void {
    this.emp = new Employee(0, '', '', 0);
  }
  save(): void {
    this.tax = this.emp.Salary * 0.2;
    this.emps = this.logic.saveEmployee(this.emp);
    console.log(`Data in Employees Array ${JSON.stringify(this.emps)}`);
  }
  getSelectedEmployee(e: Employee): void {
    // this.emp = e; // emp and e points to the same object
    // use Object.assing() to create a new blank copy of 'e' and store data from e in it
    // let 'emp' read the data from this new object
    this.emp = Object.assign({}, e);
  }
}
