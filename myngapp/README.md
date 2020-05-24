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
