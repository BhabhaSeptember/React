import React, { Component } from "react";

class Products extends Component {
  render() {
    // Example3: 
    const products = ["Learning React", "Pro React", "Beginning React"];
    const listProducts = products.map((product) => (
      <li key={product.toString()}>{product}</li>
    ));
    return (
      <div>
        {/* //Example1: <h2>Products</h2> */}
        {/* //Example2: <h2>Courses</h2> */}

        <ul>{listProducts}</ul>

      </div>
    );
  }
}

export default Products;
