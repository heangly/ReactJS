const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true };

    case 'LOAD_DATA':
      return { ...state, loading: false, cart: action.payload };

    case 'CLEAR_CART':
      return { ...state, cart: [] };

    case 'REMOVE':
      const newItems = state.cart.filter((item) => item.id !== action.payload);
      return { ...state, cart: newItems };

    case 'INCREASE_AMOUNT':
      const increasedItems = state.cart.map((item) => {
        return item.id === action.payload
          ? { ...item, amount: item.amount + 1 }
          : item;
      });
      return { ...state, cart: increasedItems };

    case 'DECREASE_AMOUNT':
      const decreaseItems = state.cart
        .map((item) => {
          return item.id === action.payload
            ? { ...item, amount: item.amount - 1 }
            : item;
        })
        .filter((item) => item.amount !== 0);
      return { ...state, cart: decreaseItems };

    case 'GET_TOTAL':
      const total = state.cart.reduce(
        (acc, curr) => acc + curr.price * curr.amount,
        0
      );
      return { ...state, total: total.toFixed(2) };

    case 'GET_AMOUNT':
      const amount = state.cart.reduce((acc, curr) => acc + curr.amount, 0);
      return { ...state, amount };

    default:
      return state;
  }
};

export default reducer;
