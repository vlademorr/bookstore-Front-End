import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app";
import ErrorBoundry from "./components/errorBoundry";
import BookstoreService from "./services/bookstoreService";
import  { bookstoreServiceContext } from "./components/bookstoreServiceContext";

import store from "./store";

const bookstoreService = new BookstoreService();

ReactDom.render(
    <Provider store={store}>
        <ErrorBoundry>
            <bookstoreServiceContext.Provider value={bookstoreService}>
                <Router>
                    <App/>
                </Router>
            </bookstoreServiceContext.Provider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById("root")
);
