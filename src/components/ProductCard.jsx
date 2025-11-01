import AddToCartIcon from "../assets/images/icon-add-to-cart.svg";

export default function ProductCard({
  imgSrc,
  category,
  name,
  price,
  onAddToCart,
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="relative">
        <img src={imgSrc} alt={name} className="w-full h-auto rounded-lg" />
        <div className="w-full">
          <button onClick={onAddToCart} className="">
            <img
              src={AddToCartIcon}
              alt="Add to cart"
              className="inline-block mr-2"
            />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-[#D9BFB6]">{category}</h3>
        <h2 className="text-[#2E0D09]">{name}</h2>
        <h2 className="text-[#D6452A]">${price}</h2>
      </div>
    </div>
  );
}
