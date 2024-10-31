import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Products from "./Products";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Rating from './Rating';

function App() {
  // const isValid = true;
  // const isValid = false;

  return (
    <div className="App">
      {/* =====- EXAMPLE1: -===== */}
      {/* <Products />
      <Button variant="success" disabled={!isValid}>
        Default
      </Button> */}

      {/* =====- EXAMPLE2: -===== */}
{/* React calling Rating component with {rating: '1'} as props object */}
      <Rating rating='1' />
      <Rating rating='2' />
      <Rating rating='3' />
      <Rating rating='4' />
      <Rating rating='5' />




    </div>
  );
}

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Products />
//         <Button variant="success" disabled>Default</Button>
//       </div>
//     );
//   }
// }
export default App;
