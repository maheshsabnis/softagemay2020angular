1. install @angulacr/cli in global scope to create new angular project
   npm install -g @angular/cli
2. ng new <PROJECT-NAME>, the new project created

   1. package.json

      1. The file that contains list of all packages for Angular Application
      2. Dev and Runtime packages for Angular app are listed under 'dependencies' section of package.json
      3. Important packages for Dev and Run
         1. @angular/platform-browser-dynamic
            1. Contains 'platformBrowserDynamic()' method to bootstrap (load and initialize) angular application in browser. Used in main.ts file
         2. @angular/platform-browser
            1. Provies 'BrowserModule', this is used to execute angular application after initialization
         3. @angular/compiler
            1. The Ahead-of-Time (AoT) compiler to provide an optimized and compressed compilation for the applciation
            2. Ivy comoiler (Form Angular 9)
               1. Optimize the HTML Compilation to overall reduce the Size of Angular app in Production (nearly 80% of compression)
         4. @angular/common
            1. Define the strategy for Module loading of internal and external module in the current application
               1. Provides 'CommonModule' taht manages the loading and initialization of external modules
               2. @angular/common/http
                  1. Provides 'HttpClientModule' for providing a platform for HTTP Communication from the angular application
         5. @angular/core
            1. The Most important module of Angular for Application Development
               1. Provides 'Decorator' classes for developing angular application
               2. NgModule
                  1. Used as @NgModule as decorator applied on class to make the class as Angular Module
               3. Component
                  1. Used as @Component as decorator applied on class to make the class as Angular Component
               4. Injectable
                  1. Used as @Injectable as decorator applied on class to make the class as Angular Service
               5. Directive
                  1. Used as @Directive as decorator applied on class to make the class as Angular Directive
               6. Pipe
                  1. Used as @Pipe as decorator applied on class to make the class as Angular Pipe
               7. Input
                  1. Used as @Input as decorator applied on class to make the class property (Directive/Component) as Input aka property binding to accept value from UI
               8. Output
                  1. Applied as @Output on EventEmitter class to emi an event from chile component to parenet component or to emit events across components
               9. HostListener
                  1. Applied as @HostListener decorator on methods of Component / Directive to execute a method when an event is raised.
         6. @angular/forms
            1. Used for HTML forms to be used in angular for sumbit
               1. FomsModule
                  1. The module class used for Two-Way Databinding
               2. ReactiveFormsModule
                  1. The module class used for defining the HTML form that is bound to model class. e.g. Employee class, Department class, etc. to generate UI mapped to the public properties of the model class
               3. FormGroup
                  1. Represents a collection of All form elements to submit. Elements inside <form></form> tag
               4. FormCollection
                  1. An editable element inside the HTML Form that is used to read/write value of Model property
               5. Validators
                  1. Contains all Form/Property validation methods
         7. @angular/router
            1. Contains the 'RouterModule' for develoiping Single Page Application (SPA)
         8. @angular/elements
            1. Publishing Angular Components as Elements so that otje JavaScript Lib/Framework can use it.
         9. @angular/animations
            1. For Anumating the UI
      4. External Dependnecy Packages
         1. tslib
            1. Provide the transpilation of Angular Object model into JavaScript compatible to browser using ES 6/ES 7 rules
         2. zone.js
            1. StackTrace of Error Messages in Browser in case of App crash
         3. rxjs
            1. Reactive Extenaion for JavaScript
               1. Very imporatnt for External HTTP Calls from Angular application
      5. The 'devDependencies' contains dev and test time dependenceis
         1. Karma, Jasmine, Protractor, TypeScript, etc

   2. tsconfig.json
      1. Contains all settings for transpiling (compiling) typescript into JavaScript
         1. tsconfig.app.json
            1. Dev. Mode configuration
         2. tsconfig.spec.json
            1. Test Model configuration
   3. angular.json
      1. The main application configuration file for the current app
         1. Contains configuration for
            1. Dev and Build
            2. Test
            3. Serve, running the app
         2. List of all external or additional JavaScript file needed for the app in any
         3. List of all CSS for the application
   4. Testing Env.
      1. karma.config.js
         1. Karma configuration
      2. test.ts
         1. The foundation of Test Configuration for the current application

3. Folder Structures
   1. src folder
      1. main.ts
         1. Contains teh Entry-Point code for the Application
      2. polyfills.ts
         1. Contains code for configuring zone.js and tslib in for the application
      3. index.html
         1. Contains Markup to render the Angular UI
      4. app folder
         1. contains application code like, modules, components, services, directives, pipes, custom logic etc.
      5. environment folder
         1. contains dev/test/production env. settings. Default is dev. env.
      6. assets
         1. contains image files, other icon files

======================================================================
The ng serve command will create d dev. build and host the application on port 4200

1. runtime.js
   1. Contains all runtime code for the angular app in browser
      1. Useing webpack to manage all angular dependencies
2. polyfills.js
   1. Contains Zone.js settings and tslib presets for execuing the resultant js code of angular app in browser
3. styles.js
   1. Contains js objects for all css files (internal or external)
4. vendor.js
   1. Contains js tranpilation of all standard angular modules e.g. @angular/core, @angular/forms, ect.
5. main.js
   1. The angular application code written by the developer

======================================================================================
======================================

Angular Forms
1. If using <form> tag on HTML then each editable element inside <form> tag must have 'name' attribute, the <form> tag will create a name/value pair of all data entered in editable elements of form. This will create a 'FormModel' (concept of HTML 5) that is the name/value pair of all editable element's data. THis is submitted to with Form Post.
2. Use Directvives to Manage HTML generation and UI during the Angular Component Execution
   1. What is Directive?
      1. The Angular's concept for Reusable Functional UI 
      2. The Angular's concept for extending behavior of HTML element with custom logic
      3. The Angular's concept for Dynamically adding/removing DOM from HTML
   2. Types of Directives
      1. Component Directives, each component is a directive. This is functionaly reusable UI.
      2. Attribute Directive, used to set custom behavior for HTML element by creating custom attribute. e.g. ngModel
      3. Structural Directives, used to add/remove DOM Dynamically during HTML rendering
         1. *ngFor --> Execute for..of loop to generate DOM elements on UI
         2. *ngIf --> Execute if condition
         3. *ngSwitch -- ngSwitchCase     
3. Angular Reactive Forms
   1. It is a form that is Bound to Model Class instead of using ngModel binding 
   2. Uses ReactiveFormsModule form @angular/forms with following classes
      1. FormGroup
         1. A Group of FormControls where each FormControl is mapped to a plublic proeprty from Model class.
         2. FormControl also configured with Validation Rules (if any) those are applied for public properties of Model class
         3. FormControl is linked with editable UI element using 'formControlName' attribute.
         4. formControlName represent the value entered in editable element that will be assignied to the corresponding property form the Model class. 
      2. FormGroup is posted aka submitted with all data entered in the editable UI elements at Once. 
      3. FormGroup and FormControl classes have 'value' proeprty, to read data entered in Form
      4. FormGroup and FormControl classes have 'setValue()' method to assign values to it 
      5. Reactive Forms aka Model-Drive-Forms uses validations directly applied on Model class proeprties
         1. Validators class with its static methods
            1. requred(AbstractControl)  and requiredTrue(AbstractControl)
            2. min(number) / max(number) 
            3. minLength(number) / maxLength(number)  
            4. pattern(string | RegEx)
            5. email(AbstractControl)
            6. nullValidator(AbstractControl)
            7. compose(Validators Array), used for applying one or more validation rules on proeprties
         2. Note
            1. If validation method accepts AbstractControl as input parameter then we need not to pass any value to the method because the value will be read from the UI element with which the property is bound using formControl. 
      6. To create a custom validator the method must be static in a class and method can accepts either AbstractControl or premptive type as input parameter (only one type of parameter). If the value is valid then this method will return 'null' else it will return JSON object as error 

=====================================================================================================

Using The Angular Component as the Reusable Function and UI Directive
1. Create a component and use it as a Child Component inside the parent component
2. The Child component will accept data from Parent Component by declaring a public get/set property in child componenent. This property will be decorated with @Input() decorator. This menas that the property will be used as property binding from parent to child.
3. If child component wants to emit data to pernent component then in child component we must declare the EventEmitter<T> object that is decorated with the @Output() decorator
   1.  EventEmitter<T> is a class that is used to emit an event from child component to paremnet component using its 'emit()' method. This is generic class and T represents the type of data to be emitted from child to parent. The emit(parameter) method accepts 'parameter', this is the value that will be emitted from child component to parent component.
   2. The event declared using EventEmitter<T> is used for Event Binding in parenet component and the emitted data from child will be read by parent component using '$event' object. This is standard JavaScript object 


=========================================================================================================

Assignment: 
1.  Validate EmpName for Required Validator and the EmpName must start from UpperCase character and should not have any special chracter. (Hint: Use regular expression)
2.  Write a custom validator that will check uniqueness of the EmpNo
3.  Create a Parement-Child component as Category/Product and list only Products for the selected category from Category Parent Component
    1.  CategoryPerentComponent
        1.  Create Category class and Categories array
    2.  ProductChildComponent  
        1.  Create Product Class and Products array
    3.  Display products in ProductChild Component based on Selected Category Name from CategoryComponent
