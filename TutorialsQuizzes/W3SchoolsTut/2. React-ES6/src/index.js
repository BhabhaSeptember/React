import React from "react";
import ReactDOM from "react-dom/client";

//========================== REACT ES6 CLASSES ==========================
// //CLASS DECLARATION
// class Car {
//   //Constructor
//   constructor(name) {
//     this.brand = name;
//   }
//   //Methods
//   present() {
//     return 'I have a ' + this.brand;
//   }
// }
// const myCar = new Car("Ford");

// class Model extends Car {
//   constructor(name, mod) {
//     super(name);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + ', it is a ' + this.model
//   }
// }
// const myCar2 = new Model("Ford", "Ikon");

// //JSX
// const myFirstElement = (
//   <div>
//     <h1>Hello React!</h1>
//     <p>{myCar.present()}</p>
//     <p>{myCar2.show()}</p>
//   </div>

// )

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myFirstElement);

//========================== REACT ES6 ARROW FUNCTIONS ==========================
//EXAMPLE1:
// const hello = function() {
//   return "Example1: Function";
// }
// const hello2 = () => {
//   return "Example2: Arrow Function";
// }
// const hello3 = () => "Example3: Shortened Arrow Function";
// const hello4 = (val) => `Example4: Arrow Function with Parameter Value of  "( ${val} )"`;
// const hello5 = val => `Example5: Arrow Function with Parameter Value of  "( ${val} )"`;

// const element = (
//   <div>
//   <p>{hello()}</p>
//   <p>{hello2()}</p>
//   <p>{hello3()}</p>
//   <p>{hello4(4)}</p>
//   <p>{hello5(5)}</p>
//   </div>
// )
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

//EXAMPLE2: THE 'this' KEYWORD (see index.html)

//========================== REACT ES6 VARIABLES ==========================
//var has a function scope, not a block scope
//let has a block scope
//const has a block scope. It defines a constant reference to a value

//========================== REACT ES6 ARRAY METHODS ==========================
// const myArray = ['apple', 'banana', 'guava'];

// const myList = myArray.map((item) => <p> - {item}</p>);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myList);

//========================== REACT ES6 DESTRUCTURING ==========================
//EXAMPLE1: DESTRUCTING ARRAYS

// const vehicles = ["mustang", "f-150", "expedition"];

// //OLD WAY : Assigning array items to a variable
// const car = vehicles[0];
// const truck = vehicles[1];
// const suv = vehicles[2];

// //NEW WAY:
// const [car2, truck2, suv2] = vehicles;
// const [car3, , suv3] = vehicles;


//EXAMPLE2: (Please see index.html)


//EXAMPLE3: DESTRUCTING OBJECTS (Please see index.html)



//========================== REACT ES6 SPREAD OPERATOR ==========================

//(Please see index.html)


//========================== REACT ES6 MODULES ==========================

//Please see :
// a) person.js
// b) messages.js
// C) index.html
//


//========================== REACT ES6 TERNARY OPERATOR ==========================

