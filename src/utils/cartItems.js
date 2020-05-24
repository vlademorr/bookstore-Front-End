const updateCartItems = (cartItems, item , idx) => {
    if (idx === -1) {
        return [
            ...cartItems,
            item
        ];
    }
    if (item.count === 0){
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ];
    }
    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ];
};

const updateCartItem = (book, item = {}, quantity) => {
    const {
        id = book._id,
        title = book.title,
        count = 0,
        total = 0
    } = item;
    return {
        id,
        title,
        count: count + quantity,
        total: total + quantity*book.price
    };
};

const updateOrder = (state, bookId, quantity) => {
    const book = state.books.find((book) => book._id === bookId);
    const itemIndex = state.cartItems.findIndex(({id}) => id === bookId);
    const item = state.cartItems[itemIndex];
    const newItem = updateCartItem(book, item, quantity);
    let price;

    if(quantity === -1){
        price = -book.price
    }else if(quantity === 1) {
        price = book.price
    }else if(quantity < -1){
        price = -item.total
    }

    return  {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, itemIndex),
        orderTotal: state.orderTotal + +price
    };
};

export {
    updateOrder
}