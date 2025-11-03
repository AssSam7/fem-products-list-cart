import RemoveItemIcon from "../../assets/images/icon-remove-item.svg";

export default function CartList({ items }) {
  return items.map((item) => (
    <div className="py-3 border-b flex justify-between items-center">
      <div className="flex flex-col gap-5">
        <h3 className="font-extrabold">{item.name}</h3>
        <div className="flex items-center gap-4">
          <p className="text-[#D6452A]">{item.quantity}x</p>
          <p className="flex gap-2">
            <span className="text-[#D9BFB6] font-bold">@{item.price}</span>
            <span className="text-[#A07370] font-bold">${item.price}</span>
          </p>
        </div>
      </div>
      <img
        src={RemoveItemIcon}
        alt="Remove Item Icon"
        className="cursor-pointer"
      />
    </div>
  ));
}
