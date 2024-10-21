// import logo from "./logo.svg";
// import "./App.css";

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


//-------------------------------------------------------

import React, { Component } from "react";
import Products from "./Products";


class App extends Component {

  formatName (user) {
    return user.firstName + ' ' + user.lastName;
  }

  render() {
    const user  = {
      firstName : 'Bhabha',
      lastName  :'September'
    };

    return (
      <div>       
        {/* //Example1: <h1>My First React App!</h1>
        <Products /> */}

        {/* //Example2: <Products />
        <Products /> */}

         <h1> Hello there, {this.formatName(user)} ! </h1>

      <Products />
     </div>
    
    );

    

  }
}

export default App;
