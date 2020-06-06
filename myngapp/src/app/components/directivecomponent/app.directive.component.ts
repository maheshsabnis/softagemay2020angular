import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-directive-component',
  template:`
    <h2>The Custom Directive Demo</h2>
    <table class="table table-bordered table-striped">
       <tbody>
          <tr>
            <td>
              <input type="radio" name="r" value="red" (click)="passcolor('red')"/> Red
            </td>
            <td>
              <input type="radio" name="r" value="yellow" (click)="passcolor('yellow')"/> Yellow
            </td>
            <td>
              <input type="radio" name="r" value="Blue" (click)="passcolor('blue')"/> Blue
            </td>
          </tr>
       </tbody>
    </table>
  <hr>
  <div class="container" [setcolor]="color">This is the First Div</div>
  <hr>
  <div class="container" [setcolor]="color">This is the Second Div</div>
  <hr>
  <div class="container" [setcolor]="color">This is the Third Div</div>

  `
})

export class DirectiveComponent {
   color: string;
   constructor(){
     this.color = '';
   }
   passcolor(c): void {
     this.color = c;
   }
}

