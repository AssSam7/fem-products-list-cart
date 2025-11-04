import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContextProvider";

export default function useProductCard(product) {
  const [isProductBeingAdded, setIsProductBeingAdded] = useState(false);
  const [productQuantity, setProductQuantity] = useState(0);

  const { state, dispatch } = useContext(CartContext);

  const cartIds = state.cartItems.map((item) => item.id);

  const handleAddToCart = () => {
    setIsProductBeingAdded(true);
    setProductQuantity(1);
    dispatch({
      type: "add",
      item: {
        ...product,
        quantity: 1,
        totalCost: product.price,
      },
    });
  };

  const handleIncrQuantity = (id) => {
    setProductQuantity((quantity) => quantity + 1);
    dispatch({ type: "incr_quantity", id });
  };

  const handleDecrQuantity = (id) => {
    setProductQuantity((quantity) => (quantity > 1 ? quantity - 1 : 0));
    if (productQuantity > 1) {
      dispatch({ type: "decr_quantity", id });
    } else {
      dispatch({ type: "remove_item", id });
    }
  };

  useEffect(() => {
    if (productQuantity === 0) {
      setIsProductBeingAdded(false);
    }
  }, [productQuantity]);

  useEffect(() => {
    if (!cartIds.includes(product.id)) {
      setIsProductBeingAdded(false);
      setProductQuantity(0);
    }
  }, [cartIds, product.id]);

  return {
    productQuantity,
    isProductBeingAdded,
    handleAddToCart,
    handleIncrQuantity,
    handleDecrQuantity,
  };
}
