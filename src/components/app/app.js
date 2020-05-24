import React from "react";
import { Route, Switch } from "react-router-dom";
import ShopHeader from "../shopHeader";
import { HomePage, CartPage } from "../pages";
import ErrorMessage from "../messages"
import "antd/dist/antd.css";
import "./app.css";

const App = ({ total, cartItems }) => {
    return (
        <main role="main" className="container">
            <ErrorMessage/>
            <ShopHeader numItems={cartItems} total={total}/>
            <Switch>
                <Route
                    path="/"
                    component={HomePage}
                    exact />
                <Route
                    path="/cart"
                    component={CartPage} />
            </Switch>
        </main>
    );
};

export default App;