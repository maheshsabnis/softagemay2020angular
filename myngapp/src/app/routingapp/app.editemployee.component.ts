import {Component , OnInit} from '@angular/core';
// ActivatedRoute, class used to subscribe to the route parameter
import { ActivatedRoute, Router } from '@angular/router';
import {Employee, Employees, Departments} from './../models/app.employee.model';
import {Logic} from './../models/app.logic';
@Component({
  selector: 'app-editemployee-component',
  templateUrl: './app.editeemployee.view.html'
})
export class EditEmployeeComponent implements OnInit {
  emp: Employee;
  emps: Array<Employee>;
  private logic: Logic;
  headers: Array<string>;
  depts =  Departments;
  // inject ActivatedRoute and Router
  constructor(private act: ActivatedRoute, private router: Router) {
     this.emp = new Employee(0, '', '', 0);
     this.emps = Employees;
     console.log(JSON.stringify(this.emps));

     this.logic = new Logic();

  }
  ngOnInit(): void {
    // read the route parameter value
    // by subscribing to router expression
    this.act.params.subscribe((param) => {
      console.log(`In Edit ${param.id}`);

       // read employee details based on EmpNo
      let selectedEmp = this.emps.filter((e,i) => {
          console.log(e.EmpNo ==  param.id);
           return e.EmpNo == param.id;
       });
      console.log(JSON.stringify(selectedEmp));
       // assign the searched Employee record to emp
       this.emp = selectedEmp[0];
    });
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
