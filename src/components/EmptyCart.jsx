import EmptyCartIcon from "../../assets/images/illustration-empty-cart.svg";

export default function EmptyCart() {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-2">
      <img src={EmptyCartIcon} alt="Empty Cart Icon" />
      <p className="text-[#A07370] font-extrabold">
        Your added items will appear here
      </p>
    </div>
  );
}
