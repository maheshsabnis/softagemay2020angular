import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeeFormComponent } from './app.employeeform.component';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../models/app.employee.model';

describe('EmployeeFormComponent', () => {
  let empFormComponent: EmployeeFormComponent;
  let empFormComponentFixture: ComponentFixture<EmployeeFormComponent>;
  // gets executed before each test
  beforeEach(async(() => {
    // configure the App Module for testing
    TestBed.configureTestingModule({
      // import all standard modules
      imports: [
          FormsModule
      ],
      // component(s) to be tested
      declarations: [
        EmployeeFormComponent
      ],
    }).compileComponents(); // component with its HTML will be compiled3

  }));


  beforeEach(() => {
     // 1. get the component instance
     empFormComponentFixture =  TestBed.createComponent(EmployeeFormComponent);
     // 2. create fixture instance so that changes in Component can be detected
     empFormComponent = empFormComponentFixture.componentInstance;
     // 3. set fixture to detect changes
     empFormComponentFixture.detectChanges();
  });
  it('should calculate tax based on salary', () => {
      // arrange
      const salary = 90000;
      const expected = 18000;
      // act
      const actual = empFormComponent.calculateTax(salary);
      // expect
      expect(actual).toEqual(expected);
  });

  it('should calculate tax when teh save button is clicked', () => {
     let emp = new Employee(0, '', '', 0);
     emp.Salary = 80000;
     empFormComponent.emp = emp; // set the emp property of the component class

     // get the DOM element that is to be watched with Databinding (property, event, twoway)
     const  nativeElement = empFormComponentFixture.nativeElement;
     // get the button element object so that event
     // reading button element based on class btn-success applied on it
     let btnSave: HTMLElement = nativeElement.querySelector('.btn-success');
     // dispatch the click event
     const eventType = btnSave.dispatchEvent(new Event('click'));
     // detect changes on DOM after the test dispatch event on it
     empFormComponentFixture.detectChanges();
     // assertion
     // read the input element having disabled property
     expect(nativeElement.querySelector('input[disabled]').value).toEqual('16000');
  });

});
