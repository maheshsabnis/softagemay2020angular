import {Employee, Employees} from './../models/app.employee.model';
export class Logic {
  private emps : Array<Employee>;

  constructor() {
      this.emps = new Array<Employee>();
  }
  getEmployees() : Array<Employee> {
    this.emps = Employees;
    return this.emps;
  }
  saveEmployee(emp: Employee) : Array<Employee> {
    this.emps.push(emp);
    return this.emps;
  }
}
