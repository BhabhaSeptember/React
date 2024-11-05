import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./Products";
import JumbotronComponent from "./JumbotronComponent";
import UserForm from "./UserForm";

function App() {
  return (
    <div className="App">
     <UserForm/>
    </div>
  );
}

export default App;
