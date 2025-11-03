export const cartReducer = (state, action) => {
  if (action.type === "add") {
    return {
      ...state,
      cartItems: [...state.cartItems, action.item],
    };
  } else if (action.type === "confirm_order") {
    return {
      ...state,
      isOrderConfirmed: true,
    };
  }
  return state;
};
