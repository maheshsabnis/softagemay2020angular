import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/app.employee.model';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-pipe-component',
  template:`
    <h2>The Angular Pipes</h2>
    <div class="container">
      {{birthDate | date}}
    </div>
    <div class="container">
      {{birthDate| date:'full'}}
    </div>
    <div class="container">
      {{birthDate| date:'MM/dd/yyyy'}}
    </div>
    <div class="container">
      {{name| uppercase}}
    </div>
    <div class="container">
      {{name| lowercase}}
    </div>
    <div class="container">
      {{salary| currency: 'INR'}}
    </div>
    <div class="container">
      {{emp| json}}
    </div>
    <hr/>

    <hr/>
    <div class="container">
       {{timer| async}}
    </div>
  `
})
export class PipeComponent implements OnInit {
  birthDate: Date;
  name: string;
  salary: number;
  emp: Employee;

  message: Promise<string>|null = null;
  messageValueArrived: boolean = false;
  messageReceivedResolver: Function|null = null;


  timer = new Observable<string>((observer: Observer<string>) => {
      setInterval(()=>  observer.next(new Date().toString()), 1000);
  });

  constructor() {
    this.birthDate = new Date(1978, 8, 21);
    this.name = 'Mahesh Rameshrao Sabnis';
    this.salary = 8987987;
    this.emp = new Employee(101, 'Mahesh', 'IT', 8888);

   }



   resetValue() {
      this.messageValueArrived = false;
      this.message = new Promise<string>((resolve, reject) => {
        this.messageReceivedResolver = resolve;
      });
   }

   buttonClicked() {
     if (this.messageValueArrived) {
       this.resetValue();
     } else {
        this.messageReceivedResolver('hello, I will be received....');
        this.messageValueArrived = true;
     }
   }

  ngOnInit(): void { }
}
