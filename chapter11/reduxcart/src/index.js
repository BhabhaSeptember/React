import React, {  Component} from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import cartReducer from "./reducer";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';

var destination = document.querySelector("#container");

var store = createStore(cartReducer);

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    destination
);