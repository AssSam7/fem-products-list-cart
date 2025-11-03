/* Assets */
import AddToCartIcon from "../../assets/images/icon-add-to-cart.svg";
import IncrementQuantityIcon from "../../assets/images/icon-increment-quantity.svg";
import DecrementQuantityIcon from "../../assets/images/icon-decrement-quantity.svg";
/* Custom Hooks */
import useProductCard from "../hooks/useProductCard";

export default function ProductCard({ product }) {
  const { id, image, category, name, price } = product;

  const {
    productQuantity,
    isProductBeingAdded,
    handleAddToCart,
    handleIncrQuantity,
    handleDecrQuantity,
  } = useProductCard(product);

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
            className="w-40 cursor-pointer mt-[-22px] border-[1.7px] border-[#C8A59A] bg-[white] text-[#2E0D09] px-4 py-2 rounded-full font-medium flex justify-between items-center"
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
                  onClick={() => handleDecrQuantity(id)}
                />
                <p className="text-white text-lg">{productQuantity}</p>
                <img
                  src={IncrementQuantityIcon}
                  alt="Increment Quantity"
                  onClick={() => handleIncrQuantity(id)}
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
