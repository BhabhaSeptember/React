

// //======================EXAMPLE 1: FUNCTIONAL - BASED COMPONENT CALLED APP======================
// import logo from "./logo.svg";
// import "./App.css";

// function App() {

//   return (

// //NOTE: Class attribute below defined by 'className' not 'class'
// //App component controls the view through JSX template it returns
// //A component has to return a single React element e.g. <div/>

//     <div className="App">  
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>

//   );
// }

// //=================================EXAMPLE 2: CLASS BASED COMPONENT =================================

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";


//EDITING REACT COMPONENT
class App extends Component {
  //RETURNS JSX TEMPLATE THROUGH RENDER METHOD
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My First React App!</h1>
        <p>React is fun to learn!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    );
  }
}

export default App;
