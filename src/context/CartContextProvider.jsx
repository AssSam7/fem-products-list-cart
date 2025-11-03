import { createContext, useReducer } from "react";
import { cartReducer } from "./CartReducer";

const initialState = {
  cartItems: [],
  isOrderConfirmed: false,
};

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext(initialState);

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
