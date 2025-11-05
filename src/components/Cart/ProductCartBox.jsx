import { useContext } from "react";

import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import { CartContext } from "../../context/CartContextProvider";
import CarbonNeutralCard from "../CarbonNeutralCard";
import { ConfirmOrderButton } from "../Buttons/ConfirmOrderButton";

export default function ProductCartBox() {
  const { state } = useContext(CartContext);

  return (
    <div className="w-[30vw] bg-white min-h-[400px] max-h-[550px] overflow-auto p-7 flex flex-col gap-5 rounded-lg">
      <h2 className="text-[#D6452A] text-2xl font-bold">
        Your Cart ({state.cartItems.length})
      </h2>
      {state.cartItems.length ? (
        <div className="flex flex-col gap-6">
          <CartList items={state.cartItems} />
          <CartTotal total={state.cartTotal} />
          <CarbonNeutralCard />
          <ConfirmOrderButton onConfirmOrder={() => {}} />
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}
