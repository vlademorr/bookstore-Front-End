import React from "react";
import BookListItem from "../bookListItem";
import Spinner from "../spinner";
import ErrorIndicator from "../errorIndicator";
import "./bookList.css";

const BookList = ({ books, onAddedToCart, loading, error }) => {
    if (loading) {
        return <Spinner />;
    }
    if (error) {
        return <ErrorIndicator />;
    }
    return (
        <ul className="book-list row">
            {
                (books).map((book) => {
                    return(
                        <li key={book._id}>
                            <BookListItem book={book} onAddedToCart={() => onAddedToCart(book._id)}/>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default BookList