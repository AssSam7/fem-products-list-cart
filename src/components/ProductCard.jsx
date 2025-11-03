import { useContext, useEffect, useState } from "react";
import AddToCartIcon from "../../assets/images/icon-add-to-cart.svg";
import IncrementQuantityIcon from "../../assets/images/icon-increment-quantity.svg";
import DecrementQuantityIcon from "../../assets/images/icon-decrement-quantity.svg";
import { CartContext as cartContext } from "../context/CartContextProvider";

export default function ProductCard({ product }) {
  const { image, category, name, price } = product;
  const [isProductBeingAdded, setIsProductBeingAdded] = useState(false);
  const [productQuantity, setProductQuantity] = useState(0);

  const { dispatch } = useContext(cartContext);

  const handleAddToCart = () => {
    setIsProductBeingAdded(true);
    setProductQuantity(1);
    dispatch({ type: "add", item: product });
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

  return (
    <div className="flex flex-col gap-3">
      <div className="relative">
        <img
          src={image["desktop"]}
          alt={name}
          className="w-full h-auto rounded-lg"
        />
        <div className="w-full flex justify-center">
          <button
            className="w-[150px] cursor-pointer mt-[-22px] border-[1.7px] border-[#C8A59A] bg-[white] text-[#2E0D09] px-4 py-2 rounded-full font-medium flex justify-between items-center"
            onClick={!isProductBeingAdded ? handleAddToCart : () => {}}
            style={{
              backgroundColor: `${isProductBeingAdded ? "#D6452A" : ""}`,
            }}
          >
            {!isProductBeingAdded ? (
              <>
                <img
                  src={AddToCartIcon}
                  alt="Add to cart"
                  className="inline-block mr-2"
                />
                <span>Add to Cart</span>
              </>
            ) : (
              <>
                <img
                  src={DecrementQuantityIcon}
                  alt="Decrement Quantity"
                  onClick={handleDecrQuantity}
                />
                <p className="text-white text-lg">{productQuantity}</p>
                <img
                  src={IncrementQuantityIcon}
                  alt="Increment Quantity"
                  onClick={handleIncrQuantity}
                />
              </>
            )}
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-[#C8A59A] text-[14px]">{category}</h3>
        <h2 className="text-[#2E0D09] text-[16px]">{name}</h2>
        <h2 className="text-[#D6452A] text-[18px]">${price}</h2>
      </div>
    </div>
  );
}
