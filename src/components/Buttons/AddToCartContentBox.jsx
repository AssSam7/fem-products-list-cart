/* Assets */
import AddToCartIcon from "../../../assets/images/icon-add-to-cart.svg";
import IncrementQuantityIcon from "../../../assets/images/icon-increment-quantity.svg";
import DecrementQuantityIcon from "../../../assets/images/icon-decrement-quantity.svg";

export const AddToCartContextBox = ({
  id,
  isProductBeingAdded,
  productQuantity,
  handleDecrQuantity,
  handleIncrQuantity,
}) => {
  return (
    <div className="flex justify-between items-center">
      {isProductBeingAdded ? (
        <>
          <img
            src={DecrementQuantityIcon}
            alt="Decrement Quantity"
            onClick={() => handleDecrQuantity(id)}
          />
          <p className="text-white text-lg">{productQuantity}</p>
          <img
            src={IncrementQuantityIcon}
            alt="Increment Quantity"
            onClick={() => handleIncrQuantity(id)}
          />
        </>
      ) : (
        <>
          <img
            src={AddToCartIcon}
            alt="Add to cart"
            className="inline-block mr-2"
          />
          <span>Add to Cart</span>
        </>
      )}
    </div>
  );
};
