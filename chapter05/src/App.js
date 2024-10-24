import React, { Component } from "react";
import JumbotronComponent from "./JumbotronComponent";
import Products from "./Products";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* EXAMPLE 1: <Products /> */}
        {/* EXAMPLE 2: <JumbotronComponent />  */}

        {/* //EXAMPLE 3: */}
        <JumbotronComponent>
          This is a long sentence, and I want to insert content into the
          jumbotron component from the outside.
        </JumbotronComponent>
      </div>
    );
  }
}

export default App;
