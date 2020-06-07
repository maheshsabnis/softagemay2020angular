import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utility-component',
  templateUrl: './app.utility.view.html'
})
export class UtilityComponent implements OnInit {
  str: string;
  constructor() {
    this.str = '';
  }
  changeCase(choice: string): void {
     alert(choice);
     if (choice === 'U') {
       this.str = this.str.toUpperCase();
       // alert(this.str);
     }

     if (choice === 'L') {
      this.str = this.str.toLowerCase();
    }
  }
  ngOnInit(): void { }
}
