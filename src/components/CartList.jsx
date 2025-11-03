import { useContext } from "react";
import RemoveItemIcon from "../../assets/images/icon-remove-item.svg";
import { CartContext } from "../context/CartContextProvider";

export default function CartList({ items }) {
  const { dispatch } = useContext(CartContext);

  const handleRemoveCartItem = (id) => {
    dispatch({ type: "remove_item", id });
  };

  return items.map((item) => (
    <div
      key={item.id}
      className="py-5 border-b border-b-[#eee] flex justify-between items-center"
    >
      <div className="flex flex-col gap-4">
        <h3 className="font-extrabold">{item.name}</h3>
        <div className="flex items-center gap-4">
          <p className="text-[#D6452A]">{item.quantity}x</p>
          <p className="flex gap-2">
            <span className="text-[#D9BFB6] font-bold">@{item.price}</span>
            <span className="text-[#A07370] font-bold">${item.totalCost}</span>
          </p>
        </div>
      </div>
      <img
        src={RemoveItemIcon}
        alt="Remove Item Icon"
        className="cursor-pointer"
        onClick={() => handleRemoveCartItem(item.id)}
      />
    </div>
  ));
}
