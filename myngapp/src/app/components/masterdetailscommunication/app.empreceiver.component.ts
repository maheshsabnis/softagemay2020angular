import { Component, OnInit } from '@angular/core';
import {Employee, Employees} from './../../models/app.employee.model';
import {CommunicationService} from './../../services/app.communication.service';
@Component({
  selector: 'app-empreceiver-component',
  template: `
  <h2>Lits of Employeed</h2>
<table class="table table-bordered table-striped">
        <thead>
          <th>EmpNo</th>
          <th>EmpName</th>
          <th>DeptName</th>
          <th>Salary</th>
        </thead>
        <tbody>
          <tr *ngFor="let e of FilteredEmployees">
            <td>{{e.EmpNo}}</td>
            <td>{{e.EmpName}}</td>
            <td>{{e.DeptName}}</td>
            <td>{{e.Salary}}</td>
          </tr>
        </tbody>
     </table>
  `
})
export class EmpReceiverComponent implements OnInit {
  emps = Employees;
  deptName: string;
  private filteredEmps: Array<Employee>;
  constructor(private serv: CommunicationService) {
    this.deptName = '';
    this.filteredEmps = new Array<Employee>();
  }

  // subscribe to the event that will be emitted by
  // the communication service and read the data
  // received from event
  ngOnInit(): void {
      this.serv.notify.subscribe((v) => {
          this.deptName = v;
          console.log(`Received value in Receiver ${this.deptName}`);
      });
  }

  // add a readonly property (getter) that will filter data
  // of employees based in DeptName
  // when deptName public member of the component
  // changed the FilteredEmployees property will be
  // evaluated
  get FilteredEmployees(): Array<Employee> {
    this.filteredEmps = new Array<Employee>();
    if (this.deptName.length > 0) {
      this.filteredEmps = this.emps.filter((v, i) => {
          return this.deptName === v.DeptName;
      });
    } else {
      this.filteredEmps = this.emps;
    }
    return this.filteredEmps;
  }


}
