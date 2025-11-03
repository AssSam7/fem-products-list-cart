import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContextProvider";

export default function useProductCard(product) {
  const [isProductBeingAdded, setIsProductBeingAdded] = useState(false);
  const [productQuantity, setProductQuantity] = useState(0);

  const { dispatch } = useContext(CartContext);

  const handleAddToCart = () => {
    setIsProductBeingAdded(true);
    setProductQuantity(1);
    dispatch({
      type: "add",
      item: {
        ...product,
        price: product.price.toFixed(2),
        quantity: 1,
        totalCost: product.price.toFixed(2),
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

  return {
    productQuantity,
    isProductBeingAdded,
    handleAddToCart,
    handleIncrQuantity,
    handleDecrQuantity,
  };
}
