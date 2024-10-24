import React, { Component } from "react";
import Products from "./Products";
import { Button } from 'react-bootstrap'; 
import Rating from './Rating'

class App extends Component {
  render() {
    // const isValid = true;

    return (
      <div>             
        {/* EXAMPLE1: <Products /> 
        <Button variant="danger" disabled= {!isValid}>Default</Button> */}
    
    {/* EXAMPLE2: 
    //React calls the Rating component with {rating:'x'}  as the props 
    Rating component returns resulting element and React DOM updates the DOM
    */}
    <h1>Click the stars to make a rating:</h1> 
    
    <Rating rating="1"/>
    <Rating rating="2"/>
    <Rating rating="3"/>
    <Rating rating="4"/>
    <Rating rating="5"/>
   
    
     </div> 
    );
  }
}

export default App;
