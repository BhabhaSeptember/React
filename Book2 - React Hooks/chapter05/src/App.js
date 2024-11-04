import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./Products";

function App() {
  return (
    <div className="App">
      <h1><u>Welcome to the Cat-Alogue!</u></h1>
      <hr></hr>

      <Products />
    </div>
  );
}

export default App;
