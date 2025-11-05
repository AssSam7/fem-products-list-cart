import { Modal } from "../Modal";
import OrderConfirmedIcon from "../../../assets/images/icon-order-confirmed.svg";
import { PrimaryButton } from "../Buttons/PrimaryButton";
import { OrderConfirmedProductList } from "./OrderConfirmedProductList";

export const OrderConfirmedModal = ({ isOpen, onClose }) => {
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

        <PrimaryButton>Start New Order</PrimaryButton>
      </div>
    </Modal>
  );
};
