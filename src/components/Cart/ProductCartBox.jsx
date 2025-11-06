import { useContext, useState } from "react";

import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import { CartContext } from "../../context/CartContextProvider";
import CarbonNeutralCard from "../CarbonNeutralCard";
import { OrderConfirmedModal } from "../Order/OrderConfirmedModal";
import { PrimaryButton } from "../Buttons/PrimaryButton";

export default function ProductCartBox() {
  const { state } = useContext(CartContext);
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex h-auto w-full flex-col gap-5 overflow-auto rounded-lg bg-white p-7 sm:max-h-[550px] sm:min-h-[400px] sm:w-[30vw]">
      <h2 className="text-2xl font-bold text-[#D6452A]">
        Your Cart ({state.cartItems.length})
      </h2>
      {state.cartItems.length ? (
        <div className="flex flex-col gap-6">
          <CartList items={state.cartItems} />
          <CartTotal total={state.cartTotal} />
          <CarbonNeutralCard />
          <PrimaryButton handleClick={() => setModalOpen(true)}>
            Confirm Order
          </PrimaryButton>
          <OrderConfirmedModal
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
          />
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}
