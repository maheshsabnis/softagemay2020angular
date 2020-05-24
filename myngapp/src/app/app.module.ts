import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Import FormsModule for Two-Way binding
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// NgModule --> The decorator class for Angular Module with following
// properties
// 1. imports --> of the type array, used to import all standard and
// external modules required in the application and run the app
// 2. declartions --> of the type array, used to declare all components,
// directives and pipes of the current application so that they can
// be loaded and exeuted as on when required. The declartions will
// conatin instaces of each component/pipe/directive
// 3. providers --> of the type array, used to register all Angular
// services in Dependency Container provided by NgModule. It provides
// a singleton instance for all registered services throught the
// angular application
// 4. bootstrap --> of the type array, used to define components to be
// loaded when app is starting execution in browser. These components
// must be present in the declarations array.
// 5. elements --> of the type array, used to define angular elements
// to exposed to other JavaScript applications
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
