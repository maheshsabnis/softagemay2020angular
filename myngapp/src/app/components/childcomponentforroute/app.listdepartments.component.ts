import { Component, OnInit } from '@angular/core';
import { DeptDatabase } from '../../models/app.employee.model';

@Component({
  selector: 'app-listdepartments-component',
  templateUrl: './app.listdepartments.view.html'
})
export class ListDepartmentsComponent implements OnInit {
  depts =  DeptDatabase;
  constructor() { }

  ngOnInit(): void { }
}
