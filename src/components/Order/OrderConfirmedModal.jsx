import { Modal } from "../Modal";
import OrderConfirmedIcon from "../../../assets/images/icon-order-confirmed.svg";
import { PrimaryButton } from "../Buttons/PrimaryButton";
import { OrderConfirmedProductList } from "./OrderConfirmedProductList";
import { CartContext } from "../../context/CartContextProvider";
import { useContext } from "react";

export const OrderConfirmedModal = ({ isOpen, onClose }) => {
  const { dispatch } = useContext(CartContext);

  const handleNewOrder = () => {
    dispatch({ type: "start_new_order" });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-5">
        <div>
          <img src={OrderConfirmedIcon} alt="Order Confirmed Icon" />
        </div>

        <div className="mt-3 flex flex-col gap-3">
          <h2 className="text-4xl font-extrabold">Order Confirmed</h2>
          <p className="font-extralight text-[#A07370]">
            We hope you enjoy your food
          </p>
        </div>

        <OrderConfirmedProductList />

        <PrimaryButton handleClick={handleNewOrder}>
          Start New Order
        </PrimaryButton>
      </div>
    </Modal>
  );
};
