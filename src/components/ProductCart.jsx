import EmptyCartIcon from "../../assets/images/illustration-empty-cart.svg";

export default function ProductCart({ cartItems }) {
  return (
    <div className="w-[30vw] bg-white h-[400px] p-7 flex flex-col gap-5 rounded-lg">
      <h2 className="text-[#D6452A] text-2xl font-bold">
        Your Cart ({cartItems.length})
      </h2>
      {cartItems.length ? (
        <></>
      ) : (
        <div className="h-full flex flex-col justify-center items-center gap-2">
          <img src={EmptyCartIcon} alt="Empty Cart Icon" />
          <p className="text-[#A07370] font-extrabold">
            Your added items will appear here
          </p>
        </div>
      )}
    </div>
  );
}
