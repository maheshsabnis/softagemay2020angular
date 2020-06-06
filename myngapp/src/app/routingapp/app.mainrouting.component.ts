import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainrouter-component',
  template:`
    <h1>The Routing App</h1>
    <table class="table table-bordered table-striped">
      <tbody>
         <tr>
           <td>
             <a [routerLink]="['']">List Of Employees</a>
           </td>
           <td>
             <a [routerLink]="['create']">Create a new Employee</a>
           </td>
         </tr>
      </tbody>
    </table>
    <hr/>
    <router-outlet></router-outlet>
  `
})
export class MainRouterComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
