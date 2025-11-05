import { Modal } from "../Modal";

export const OrderConfirmedModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-5"></div>
    </Modal>
  );
};
