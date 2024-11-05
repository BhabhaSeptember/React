import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./Products";
import JumbotronComponent from "./JumbotronComponent";

function App() {
  return (
    <div className="App">
      {/* =============== EXAMPLE1: =============== */}
      {/* <JumbotronComponent /> */}

      {/* =============== EXAMPLE2: =============== */}
      <JumbotronComponent>
        This is a long sentence, and I want to insert content into the jumbotron
        component from the outside.
      </JumbotronComponent>
    </div>
  );
}

export default App;
