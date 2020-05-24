import React from "react";
import {connect} from "react-redux";
import App from "./app";

const itemFunc = (cartItems) => {
    let numItems = 0;
    if (cartItems && cartItems.length) {
        cartItems.forEach((item) => numItems += item.count);
        return numItems;
    }
    return numItems
};

const AppContainer = ({ total, cartItems }) => {
    return <App total={total} cartItems={cartItems}/>
};

const mapStateToProps = ({ orderTotal, cartItems }) => {
    return {
        total: orderTotal,
        cartItems: itemFunc(cartItems)
    };
};

export default connect(mapStateToProps)(AppContainer);