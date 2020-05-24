const booksRequested = () => {
    return{
        type: "FETCH_BOOKS_REQUEST"
    };
};

const booksLoaded = (newBooks) => {
    return{
        type: "FETCH_BOOKS_SUCCESS",
        payload: newBooks
    };
};

const booksError = (error) => {
    return{
        type: "FETCH_BOOKS_FAILURE",
        payload: error
    };
};

const fetchBooks = (bookstoreService, dispatch) => () => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then((res) => dispatch(booksLoaded(res.data)))
        .catch((err) => dispatch(booksError(err)));
};

const btnRequest = () => {
    return{
        type: "BOOK_REQUEST"
    };
};

const addNewBookLoaded = (newBook) => {
    return{
        type: "ADD_BOOK_SUCCESS",
        payload: newBook
    };
};

const renameBookLoaded = (renamedBook) => {
    return{
        type: "RENAME_BOOK_SUCCESS",
        payload: renamedBook
    };
};

const deleteBookLoaded = (id) => {
    return{
        type: "DELETE_BOOK_SUCCESS",
        payload: id
    };
};

const actionBookError = (error) => {
    return{
        type: "ACTION_BOOK_FAILURE",
        payload: error
    };
};

const addBookOnServer = (bookstoreService, dispatch, newBook) => {
    dispatch(btnRequest());
    bookstoreService.createBook(newBook)
        .then(({data}) => dispatch(addNewBookLoaded(data)))
        .catch((err) => dispatch(actionBookError(err)));

};

const updateBookOnServer = (bookstoreService, dispatch, id, updatedBook) => {
    dispatch(btnRequest());
    bookstoreService.updateBook(id, updatedBook)
        .then(({data}) => dispatch(renameBookLoaded(data)))
        .catch((err) => dispatch(actionBookError(err)));
};

const deleteBookOnServer = (bookstoreService, dispatch, id) => {
    dispatch(btnRequest());
    bookstoreService.deleteBook(id)
        .then(() => dispatch(deleteBookLoaded(id)))
        .catch((err) => dispatch(actionBookError(err)));
};

const bookAddedToCart = (bookId) => {
    return {
        type: "BOOK_ADDED_TO_CART",
        payload: bookId
    };
};

const bookRemovedFromCart = (bookId) => {
    return {
        type: "BOOK_REMOVED_FROM_CART",
        payload: bookId
    };
};

const allBooksRemovedFromCart = (bookId) => {
    return {
        type: "ALL_BOOKS_REMOVED_FROM_CART",
        payload: bookId
    };
};

const visibilityAddBook = (boolean) => {
    return {
        type: "VISIBILITY_ADD_BOOK",
        payload: boolean
    };
};

export {
    fetchBooks,
    bookAddedToCart,
    bookRemovedFromCart,
    allBooksRemovedFromCart,
    addBookOnServer,
    updateBookOnServer,
    deleteBookOnServer,
    visibilityAddBook
};
