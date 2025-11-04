import { AddToCartContextBox } from "./AddToCartContentBox";

export const AddToCartButton = ({
  isProductBeingAdded,
  handleAddToCart,
  ...rest
}) => {
  return (
    <button
      className="w-40 cursor-pointer mt-[-22px] border-[1.7px] border-[#C8A59A] bg-[white] text-[#2E0D09] px-4 py-2 rounded-full font-medium"
      onClick={!isProductBeingAdded ? handleAddToCart : () => {}}
      style={{
        backgroundColor: `${isProductBeingAdded ? "#D6452A" : ""}`,
      }}
    >
      <AddToCartContextBox
        isProductBeingAdded={isProductBeingAdded}
        {...rest}
      />
    </button>
  );
};
