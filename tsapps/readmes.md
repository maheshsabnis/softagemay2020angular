TypeScript Programming

1. TypeScript is a language by Microsoft based on ES 6 principals

   1. ES 6 are modern JS Rules
   2. Typed JavaScript, It is a JavaScript with power of following

      1. The 'let' keyword for block scope declaration
         1. var x; --> Function Scope that will make the x accessible out of the declaring block
         2. let x; --> the x will be by default scoped to only the block in which it is declared
      2. Data Types
         1. number, string, boolean, date, object, type
         2. any, void
         3. Union Type
            1. Declaration of variable with more than one data type at a time
      3. ES 6 declarations
         1. const --> defining the constant
         2. readonly --> value cannot be reassigned
      4. Operators
         1. +, - , _, /, +=, -=, _=, /=
         2. > ,<, >=, <=, == (value equality), === (exact same, value and type equality)
         3. rest parameters
            1. Syntax is ... (3 dots) aks spread operator
      5. Array as a class

         1. Predfined generic class Array<T>
            1. T will be any primptive type e.g. string, number
            2. T can be custom type e.g. Employee class
            3. [] , the default array type
         2. Array methods
            1. Basic methods, push(), pop(), indexOf(), etc.
               1. slice(), splice()
               2. shift()
               3. unshift()
            2. ES 6 methods
               1. sort(), reverse()
               2. find(), filter()
               3. forEach(), map()
               4. concat()

      6. Template String
         1. HTML based string interpolation
         2. New syntax for String concatination
            1. Syntax `The Name is ${variable}`
      7. Arrow Operator, =>
         1. Used as input parameter to a function when the function has input parameter as 'callback function'
            1. e.g. if function f1(function(x,y){...});
            2. Replaced in ES 6 as
               1. f1((x,y)=> {.....})
      8. Object Oriented Programming
         1. Class, Access Specifiers
            1. By default all members of class are 'public'
            2. private and protected
            3. constructor() is a function
               1. Note: We can have 'only one' ctor in class. No ctor overloading
               2. ctor can have public input parameters, these will be used as public class members alsong with ctor parameters. Same for private.
            4. No function overloading
         2. Interfaces
            1. The 'interface' is a keyword to declare interface.
            2. Interface must be implemented by class and all methods of interface must be implemented by class.
            3. The class implement interface using 'implements' keyword
         3. Inheritence
            1. Derive class uses 'extends' keyword to derive from base class
               1. If based class has ctor with / without parameters, the then derive class ctor must use 'super()' call to call base class ctor.
               2. Derive class access public and protected members of the base class.
               3. No function overloading and no polyorphism
         4. Generics
            1. Class, method, interface and members
         5. Properties
            1. setter() and getter() properties
      9. Modules
         1. Namespcases or packages
         2. The class/function/array can be exported from one typescript file using 'export' keyword
            1. export class MyClass {.....}
         3. All exported types will imported in other typescript file using 'import' keyword
            1. import {MyClass} from <File>.ts

====================================================================================
Installing TypeScript

1. installing TypeSript in Global Scope
   npm install -g typescript
2. Using the 'tsc' command line to compile the typescript into JavaScript
   1. tsc <File>.ts command will transpile (Compile Transformation) into <File>.js
   2. tsc --init command will generate the tsconfig.json file
      1. This file contains the transpilation rules of .ts file into .js file
3. To run the output javascript file on the server, run the following command
   1. # node <File>.js

Ex 1: Create a class having following methods in it to operate on string utilities

1. Write a method that will print the frequency of a character in a string.
   1. e.g. how many times 'a' occures in string. Do it for all charachers
2. Write a method that will print number of words in string.
3. Write a method that will print number of statements in string.
4. Write a method to convert first character of every word in string to upper case.

Example String is

Typescript is a ES 6 based programming langugae. This is developed by Microsoft. This language is used for modern front-end programming. The Angular uses this language for its development. Typescript has data types, object oriented programming, etc. This language improves the productivity of JavaScript programming and gives power to it. The TypeScript is transpiled into JavaScript.
