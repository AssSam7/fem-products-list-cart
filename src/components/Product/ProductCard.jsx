/* Custom Hooks */
import useProductCard from "../../hooks/useProductCard";
/* Other Components */
import { AddToCartButton } from "../Buttons/AddToCartButton";

export default function ProductCard({ product }) {
  const { id, image, category, name, price } = product;

  const { ...rest } = useProductCard(product);

  return (
    <div className="flex flex-col gap-3">
      <div className="relative">
        <img
          src={image["desktop"]}
          alt={name}
          className="w-full h-auto rounded-lg"
        />
        <div className="w-full flex justify-center">
          <AddToCartButton id={id} {...rest} />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-[#C8A59A] text-[14px]">{category}</h3>
        <h2 className="text-[#2E0D09] text-[16px]">{name}</h2>
        <h2 className="text-[#D6452A] text-[18px]">${price.toFixed(2)}</h2>
      </div>
    </div>
  );
}
