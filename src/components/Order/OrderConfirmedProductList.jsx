import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";
import { OrderConfirmedProductCard } from "./OrderConfirmedProductCard";

export const OrderConfirmedProductList = () => {
  const { state } = useContext(CartContext);

  const { cartItems, cartTotal } = state;

  return (
    <div className="rounded-md bg-[#FDF6F3] p-6">
      {cartItems.map(({ image, ...item }) => (
        <OrderConfirmedProductCard imgSrc={image["thumbnail"]} {...item} />
      ))}
      <div className="flex items-center justify-between pt-5">
        <h3>Order Total</h3>
        <h1 className="text-3xl font-extrabold">${cartTotal}</h1>
      </div>
    </div>
  );
};
