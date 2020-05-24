import { updateOrder } from "../utils"

const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems:[],
    orderTotal: 0,
    bookLoading: 0,
    bookError: null,
    visibilityAddBook: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_BOOKS_REQUEST":
            return  {
                ...state,
                loading: true,
                error: null
            };
        case "FETCH_BOOKS_SUCCESS":
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };
        case "FETCH_BOOKS_FAILURE":
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            };

        case "BOOK_REQUEST":
            return  {
                ...state,
                bookLoading: ++state.bookLoading,
                bookError: null
            };
        case "ADD_BOOK_SUCCESS":
            state.books.push(action.payload);
            return {
                ...state,
                bookLoading: --state.bookLoading,
                bookError: null
            };
        case "RENAME_BOOK_SUCCESS":
            const item = state.books.findIndex(i => i._id === action.payload._id);
            return {
                ...state,
                books: [
                    ...state.books.slice(0, item),
                    action.payload,
                    ...state.books.slice(item + 1)
                ],
                bookLoading: --state.bookLoading,
                bookError: null
            };
        // case "RENAME_BOOK_SUCCESS":
        //     // state.books.forEach((item, i) => {
        //     //     console.log(action.payload);
        //     //     if(item._id === action.payload._id){
        //     //         state.books[i] = action.payload
        //     //     }
        //     // });
        //     return {
        //         ...state,
        //         books: action.payload,
        //         bookLoading: --state.bookLoading,
        //         bookError: null
        //     };
        case "DELETE_BOOK_SUCCESS":
            const itemIndex = state.books.findIndex(({_id}) => _id === action.payload);
            state.books.splice(itemIndex, 1);
            return {
                ...state,
                bookLoading: --state.bookLoading,
                bookError: null
            };
        case "ACTION_BOOK_FAILURE":
            return {
                ...state,
                bookLoading: --state.bookLoading,
                bookError: action.payload
            };
        case "BOOK_ADDED_TO_CART":
            return updateOrder(state, action.payload, 1);
        case "BOOK_REMOVED_FROM_CART":
            return updateOrder(state, action.payload, -1);
        case "ALL_BOOKS_REMOVED_FROM_CART":
            const book = state.cartItems.find((book) => book.id === action.payload);
            return updateOrder(state, action.payload, -book.count);

        case "VISIBILITY_ADD_BOOK":
            return{
                ...state,
                visibilityAddBook: action.payload
            };
        default:
            return state;
    }
};

export default reducer;