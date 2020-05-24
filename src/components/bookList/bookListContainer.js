import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withBookstoreService } from "../hoc";
import { fetchBooks, bookAddedToCart, visibilityAddBook } from "../../actions";
import BookList from "./bookList";

const BookListContainer = ({ books, loading, error, onAddedToCart, fetchBooks, visibilityAddBook }) => {
    useEffect(() => {
        fetchBooks();
        visibilityAddBook(true);
    },[fetchBooks, visibilityAddBook]);

    return <BookList
                books={books}
                onAddedToCart={onAddedToCart}
                loading={loading}
                error={error}
            />;
};

const mapStateToProps = ({ books, loading, error }) => {
    return {
        books: books,
        booksLength: books.length,
        loading: loading,
        error: error
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps;
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
        visibilityAddBook: (boolean) => dispatch(visibilityAddBook(boolean))
    };
};

export default withBookstoreService()(
    connect(mapStateToProps, mapDispatchToProps)(BookListContainer)
);