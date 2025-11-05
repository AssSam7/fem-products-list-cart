export const ConfirmOrderButton = ({ onConfirmOrder }) => {
  return (
    <button
      className="bg-[#D6452A] cursor-pointer py-4 px-6 text-white rounded-full hover:bg-[#d62a2a]"
      onClick={onConfirmOrder}
    >
      Confirm Order
    </button>
  );
};
