import { Component, OnInit } from '@angular/core';
import { SecureService } from '../../services/app.secure.service';
import { RegisterUser, LoginUser } from '../../models/app.users.model';

@Component({
  selector: 'app-secure-component',
  template: `
     <h2>Token Based Authentication Angular Client</h2>
     <input type="button" value="Create User" (click)="createUser()" class="btn btn-warning"/>
     <hr>
     <input type="button" value="Login User" (click)="loginUser()" class="btn btn-success"/>
     <hr>
     <input type="button" value="Get Products" (click)="getProductsData()" class="btn btn-danger"/>
  `
})
export class SecureComponent implements OnInit {
  constructor(private serv: SecureService) { }

  ngOnInit(): void { }

  createUser(): void {
    const registerUser = new RegisterUser('user1@myapp.com', 'P@ssw0rd_', 'P@ssw0rd_');
    this.serv.createUser(registerUser).subscribe((respose) => {
        console.log(`Response Received as ${respose.message}`);
    }, (error) => {
      console.log(`Response Error Received as ${error}`);
    });
  }

  loginUser(): void {
    const authUser = new LoginUser('user1@myapp.com', 'P@ssw0rd_');
    this.serv.loginUser(authUser).subscribe((respose) => {
        console.log(`Response Received as ${respose.message}`);
        localStorage.setItem('token', respose.message);
    }, (error) => {
      console.log(`Response Error Received as ${error}`);
    });
  }
  getProductsData(): void {
    const token = localStorage.getItem('token');
    this.serv.getData(token).subscribe((respose) => {
      console.log(`Response Received as ${JSON.stringify(respose)}`);
  }, (error) => {
    console.log(`Response Error Received as ${error}`);
  });
  }
}
