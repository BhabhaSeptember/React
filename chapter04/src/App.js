import React, { Component } from "react";
import Products from "./Products";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Cat-Mania!!</h1> 
        <hr></hr>            
        <Products />
     </div> 
    );
  }
}

export default App;
