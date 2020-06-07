import { Component, OnInit } from '@angular/core';
// Router class used for explicit routing
import {Router} from '@angular/router';
import { Employee, Employees } from '../models/app.employee.model';

@Component({
  selector: 'app-listemployees-component',
  templateUrl: './app.listemployees.view.html'
})
export class ListEmployeesComponent implements OnInit {
  emp: Employee;
  emps = Employees;
  // inject Router class
  constructor(private router: Router) {
    this.emp = new Employee(0, '', '', 0);
  }

  // navigate to create view
  create(): void {
      this.router.navigate(['create']);
  }
  edit(eno: number): void {
    console.log(`In List ${eno}`);
    this.router.navigate(['edit', eno]);
  }

  ngOnInit(): void {
    //console.log(JSON.stringify(this.emps));
  }
}
