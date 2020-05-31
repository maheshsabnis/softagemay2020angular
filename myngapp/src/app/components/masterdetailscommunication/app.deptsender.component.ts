import { Component, OnInit } from '@angular/core';
import {Department, DeptDatabase} from '../../models/app.employee.model';
import {CommunicationService} from  './../../services/app.communication.service';
@Component({
  selector: 'app-deptsender-component',
  template: `
    <h2>List of Departments</h2>
     <table class="table table-bordered table-striped">
        <thead>
          <th>DeptNo</th>
          <th>DeptName</th>
        </thead>
        <tbody>
          <tr *ngFor="let d of depts" (click)="getSelectedDept(d.DeptName)">
            <td>{{d.DeptNo}}</td>
            <td>{{d.DeptName}}</td>
          </tr>
        </tbody>
     </table>
  `
})
export class DeptSenderComponent implements OnInit {
  depts = DeptDatabase;
  // inject communication service as ctor injectation
  // this will be injected as dependency
  constructor(private serv: CommunicationService) { }

  ngOnInit(): void { }

  getSelectedDept(d: string) {
    // invoke method from service and pass the selecetd deptName
    this.serv.sendData(d);
  }
}
