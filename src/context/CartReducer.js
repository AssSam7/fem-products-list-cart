export const cartReducer = (state, action) => {
  if (action.type === "add") {
    const addedItems = [...state.cartItems, action.item];
    const total = addedItems.reduce((acc, curr) => {
      return acc + curr.totalCost;
    }, 0);

    return {
      ...state,
      cartItems: addedItems,
      cartTotal: total.toFixed(2),
    };
  } else if (action.type === "incr_quantity") {
    const updatedCartItems = state.cartItems.map((item) => {
      if (item.id === action.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
          totalCost: item.price * (item.quantity + 1),
        };
      }
      return item;
    });
    return {
      ...state,
      cartItems: updatedCartItems,
      cartTotal: updatedCartItems
        .reduce((acc, curr) => acc + curr.totalCost, 0)
        .toFixed(2),
    };
  } else if (action.type === "decr_quantity") {
    const updatedCartItems = state.cartItems.map((item) => {
      if (item.id === action.id) {
        return {
          ...item,
          quantity: item.quantity - 1,
          totalCost: item.price * (item.quantity - 1),
        };
      }
      return item;
    });
    return {
      ...state,
      cartItems: updatedCartItems,
      cartTotal: updatedCartItems
        .reduce((acc, curr) => acc + curr.totalCost, 0)
        .toFixed(2),
    };
  } else if (action.type === "remove_item") {
    const updatedCartItems = state.cartItems.filter(
      (item) => item.id !== action.id
    );
    return {
      ...state,
      cartItems: updatedCartItems,
      cartTotal: parseFloat(
        parseFloat(
          updatedCartItems.reduce((acc, curr) => acc + curr.totalCost, 0)
        ).toFixed(2)
      ),
    };
  } else if (action.type === "confirm_order") {
    return {
      ...state,
      isOrderConfirmed: true,
    };
  }
  return state;
};
