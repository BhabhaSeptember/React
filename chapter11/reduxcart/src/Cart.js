import React, { Component } from "react";
import AddProduct from './AddProduct';
import { Table } from 'reactstrap';

class Cart extends Component {
    render() {
        return (
            <div className="container">
                <br />
                <h1>The Online React Shop</h1>
                <br />
                <hr />
                <br />
                <h5><u>Add to your cart:</u></h5>

                <AddProduct addProduct={this.props.onAddProduct} />
                <br/>
                <hr/>
                <br/>
                <h5><u>Your Cart:</u></h5>
                
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Ensure productCart is being mapped properly */}
                        {this.props.productCart.length > 0 ? (
                            this.props.productCart.map((productData, index) => (
                                <tr key={index}>
                                    <td>{productData.productName}</td>
                                    <td>{productData.productPrice}</td>
                                    <td
                                        onClick={() => this.props.onDeleteProduct(productData)}
                                        style={{ cursor: 'pointer', color: 'red' }}
                                    >
                                        Remove
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" style={{ textAlign: 'center' }}>
                                    No products in the cart.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                <br/>
                <hr/>
                <br/>
                <span><h5><u>Total Amount</u> : R {this.props.totalCost}</h5></span>
            </div>
        );
    }
}

export default Cart;
