import {Component , OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from  '@angular/forms';
import {Employee, Departments} from '../../models/app.employee.model';
import {Logic} from '../../models/app.logic';
import {CustomValidator} from './app.custom.validator';
@Component({
  selector: 'app-employeereactiveform-component',
  templateUrl: './app.employeereactiveform.view.html'
}) // OnInit: Is the interface that is used to managed Lifecycle of Component
// OnInit interface has ngOnInit() method, this will be invoked automatically
// immediately after the constructor and the Changes on Component's propeties
export class EmployeeReactiveFormComponent implements OnInit {
  emp: Employee;
  emps: Array<Employee>;
  private logic: Logic;
  headers: Array<string>;
  depts =  Departments; // constant array is stored in public member of component

  // define a FormGroup object
  frmEmp: FormGroup;

  constructor() {
     this.emp = new Employee(0, '', '', 0);
     this.emps = new Array<Employee>();
     this.logic = new Logic();
     this.headers  =new Array<string>();

     // map the FormGroup to the Employee Model class where each public property from the
     // employee class will be mapped to th formControls
     // The FormControl() ctor accepts the Model class property as parameter. This proeprty
     // represents a formState, that is the value entered by user in HTML UI element
     // The 'key' of the FormControl is mapped with UI element using the 'formControlName'
     // attribute of UI Element
     this.frmEmp = new FormGroup({
       EmpNo: new FormControl(this.emp.EmpNo, Validators.compose([
         Validators.required,
         Validators.minLength(2),
         Validators.maxLength(5),
         Validators.pattern('[0-9]+')
       ])),
       EmpName: new FormControl(this.emp.EmpName),
       DeptName: new FormControl(this.emp.DeptName),
       Salary: new FormControl(this.emp.Salary , Validators.compose([
          CustomValidator.ChekckNonNegative
       ]))
     });

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
  clear() : void {
    this.emp = new Employee(0, '', '', 0);
    this.frmEmp.setValue(this.emp);
  }
  save(): void {
    // the value property represents  values entered in form
    this.emp = this.frmEmp.value;
    this.emps = this.logic.saveEmployee(this.emp);
    console.log(`Data in Employees Array ${JSON.stringify(this.emps)}`);
  }
  // getSelectedEmployee(e: Employee): void {
  //   this.frmEmp.setValue(e);
  // }
  // event is the data that is emitted by child component
  getSelectectedData(event): void {
    this.frmEmp.setValue(event);
  }
}
