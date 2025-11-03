export const cartReducer = (state, action) => {
  if (action.type === "add") {
    return {
      ...state,
      cartItems: [...state.cartItems, action.item],
    };
  } else if (action.type === "incr_quantity") {
    return {
      ...state,
      cartItems: state.cartItems.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
            totalCost: parseFloat(item.price * (item.quantity + 1)).toFixed(2),
          };
        }
        return item;
      }),
    };
  } else if (action.type === "decr_quantity") {
    return {
      ...state,
      cartItems: state.cartItems.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            quantity: item.quantity - 1,
            totalCost: parseFloat(item.price * (item.quantity - 1)).toFixed(2),
          };
        }
        return item;
      }),
    };
  } else if (action.type === "remove_item") {
    return {
      ...state,
      cartItems: state.cartItems.filter((item) => item.id !== action.id),
    };
  } else if (action.type === "confirm_order") {
    return {
      ...state,
      isOrderConfirmed: true,
    };
  }
  return state;
};
