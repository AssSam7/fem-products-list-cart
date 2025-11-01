import AddToCartIcon from "../../assets/images/icon-add-to-cart.svg";

export default function ProductCard({
  imgSrc,
  category,
  name,
  price,
  onAddToCart,
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative">
        <img src={imgSrc} alt={name} className="w-full h-auto rounded-lg" />
        <div className="w-full flex justify-center">
          <button
            onClick={onAddToCart}
            className="cursor-pointer mt-[-22px] border-[1.7px] border-[#C8A59A] bg-[white] text-[#2E0D09] px-4 py-2 rounded-full font-medium"
          >
            <img
              src={AddToCartIcon}
              alt="Add to cart"
              className="inline-block mr-2"
            />
            <span>Add to Cart</span>
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
