import React from "react";
import ChangeBook from "../modals";
import DeleteBook from "../popconfirms";
import "./bookListItem.css";

const BookListItem = ({ book, onAddedToCart }) => {
    const { title, author, price, coverImage, _id } = book;
    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src={coverImage} alt={title}/>
            </div>
            <div className="book-details">

                <div className="book-description">
                    <span className="book-title">{ title }</span>
                    <div className="book-author">{ author }</div>
                    <div className="book-price">{ price } $</div>
                </div>

                <button
                    className="btn btn-info add-to-cart"
                    onClick={onAddedToCart}>
                    Add to cart
                </button>
                <div className="bookButtons">
                    <ChangeBook nameOfBtn={"Change"} book={book}/>
                    <DeleteBook bookId={_id} />
                </div>
            </div>
        </div>
    );
};

export default BookListItem;