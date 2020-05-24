import { Component } from '@angular/core';

// Component --> properties
// 1. selector --> The custom HTML Selector using which
// the components will be referred in the HTML template e.g. index.html
// 2. templateUrl --> The URL of HTML file that conatins UI of
// the component. This will be rendered in HTML where the selector
// is used.
// 3. template --> Inline HTML UI Template
// 4. style and styleUrls --> internal and external css
// all public data members of component class are exposed to the
// HTML template using 'Interpolation' and 'Property Binding'

// Interpolation is a read-only binding
// Syntax of interpolation --> {{<PUBLIC-PROPERTY-NAME>}}

// Property-Binding
// binding the public member of Component to an get/set attribute
// of HTML UI Element.
// Syntax of Property-Binding
// [<get/set Attribute of HTML element>]="<PUBLIC-PROPERTY-OF-COMPONENT>
// e.g. <input type="text" [value]="<PUBLIC-PROPERTY-OF-COMPONENT>"/>
// Property-Binding is always from Component to UI

// Event Binding
// Syntax
// (<EVENT-NAME>) ="<Public-Method-of-Component>()"
// e.g
// <input type="button" (click)="<Public-Method-of-Component>()"/>

// Two-Way binding
// Combination of Property-Binding + Event-Binding
// Syntax is
// [(ngModel)], using ngModel, this is a attribute for
// two-way binding on Editable HTML Elements e.g. input elements,
// select, etc.
// the @NgModule must import FormModule from @angular/forms
// to execute Two-Way binding using [(ngModel)]
// ngModel execution
// 1. When the UI is changed with event, ngModel will listen to
// default event of thet UI element e.g. keyUp is default event
// of input:text element
// 2. ngModel will updated the proeprty value once the event is fired
// and then it will take the latest value of the property to
// angular component
// 3. component will update itself and then update the proepry value
// 4. component will push the updated value back to UI to update the UI





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myngapp';
  name: string;
  url: string;
  fullName: string;
  constructor(){
    this.name = 'The First Angular Component in Angular 9';
    this.url =  'https://www.webnethelper.com';
    this.fullName = '';
  }
  display(): void {
    this.name = 'The Button is Clicked....';
    this.url = 'https://www.dotnetcurry.com';
  }
}
