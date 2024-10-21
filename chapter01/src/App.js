import logo from "./logo.svg";
import "./App.css";

// FUNCTION BASED COMPONENT
// function App() {
//   return (
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


//------------------------------------------------------------------------

//EDITING REACT COMPONENT
import React, { Component } from "react";

//CLASS BASED COMPONENT
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
