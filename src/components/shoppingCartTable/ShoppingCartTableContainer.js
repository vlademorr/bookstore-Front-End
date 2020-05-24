import React, {useEffect} from "react";
import ShoppingCartTable from "./ShoppingCartTable";
import { connect } from "react-redux";
import { bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart, visibilityAddBook } from "../../actions";

const ShoppingCartTableContainer = ({ items, total, onIncrease, onDecrease, onDelete, visibilityAddBook }) => {
    useEffect(() => {
        visibilityAddBook(false)
    }, [visibilityAddBook]);
    return <ShoppingCartTable
                items={items}
                total={total}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onDelete={onDelete}
           />

};

const mapStateToProps = ({ cartItems, orderTotal }) => {
    return {
        items: cartItems,
        total: orderTotal
    };
};

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBooksRemovedFromCart,
    visibilityAddBook: visibilityAddBook
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTableContainer);