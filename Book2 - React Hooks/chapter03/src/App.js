import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Products from "./Products";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Rating from "./Rating";

function App() {
  // const isValid = true;
  const isValid = false;

  return (
    <div className="App">
      {/*====================== EXAMPLE1: ====================== */}
      {/* <h1><u>React Hooks App!</u></h1>
      <br></br>
      <Products/>
     <Button variant="success" disabled={!isValid}>Default</Button> */}

      {/*====================== EXAMPLE2: ====================== */}
      <h1>Click a star to make your rating</h1>
      <hr />
      <Rating rating="1" />
      <Rating rating="2" />
      <Rating rating="3" />
      <Rating rating="4" />
      <Rating rating="5" />
    </div>
  );
}

export default App;
