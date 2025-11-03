import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContextProvider";

export default function useProductCard(product) {
  const [isProductBeingAdded, setIsProductBeingAdded] = useState(false);
  const [productQuantity, setProductQuantity] = useState(0);

  const { dispatch } = useContext(CartContext);

  const handleAddToCart = () => {
    setIsProductBeingAdded(true);
    setProductQuantity(1);
    dispatch({ type: "add", item: { ...product, quantity: 1 } });
  };

  const handleIncrQuantity = () => {
    setProductQuantity((quantity) => quantity + 1);
  };

  const handleDecrQuantity = () => {
    setProductQuantity((quantity) => (quantity > 1 ? quantity - 1 : 0));
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
