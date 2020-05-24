import React from "react";
import { Link } from "react-router-dom";
import AddBook from "../modals";
import "./shopHeader.css";
import {connect} from "react-redux";

const ShopHeader = ({ numItems, total, visibilityAddBook }) => {
    return (
        <header className="shop-header row">
            <Link to="/">
                <div className="logo text-dark">BookStore</div>
            </Link>
            <div className="btnAdd">
                { visibilityAddBook && <AddBook nameOfBtn={"Add new book"}/> }
            </div>
            <Link to="/cart">
                <div className="shopping-cart">
                    <i className="cart-icon fa fa-shopping-cart" />
                    {numItems} items (${total})
                </div>
            </Link>
        </header>
    );
};

const mapStateToProps = ({ visibilityAddBook }) => {
    return {
        visibilityAddBook: visibilityAddBook
    };
};

export default connect(mapStateToProps)(ShopHeader);
