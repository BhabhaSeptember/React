import React, { Component } from "react";
import JumbotronComponent from "./JumbotronComponent";
import Products from "./Products";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* EXAMPLE 1: */}
        {/* <h1> Welcome to Cat-Mania</h1>
        <hr></hr>
        <Products />  */}

        {/* EXAMPLE 2: */}
        {/* <JumbotronComponent />   */}

        {/* //EXAMPLE 3: */}
        <JumbotronComponent>
          Inserting content into Jumbotron Component from the outside using
          "this.props.children"...
        </JumbotronComponent>
      </div>
    );
  }
}

export default App;
