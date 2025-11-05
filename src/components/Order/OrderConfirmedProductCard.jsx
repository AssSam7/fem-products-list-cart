export const OrderConfirmedProductCard = ({
  imgSrc,
  name,
  quantity,
  price,
  totalCost,
}) => {
  return (
    <div className="flex items-center gap-3 border-b border-b-[#eee] pb-3 nth-[n+1]:pt-3">
      <img
        src={imgSrc}
        alt={name}
        height="60"
        width="60"
        className="rounded-lg"
      />
      <div className="flex flex-1 flex-col gap-2">
        <h3>{name}</h3>
        <p className="flex gap-3">
          <span className="text-[#D6452A]">{quantity}x</span>
          <span className="text-[#C8A59A]">@ ${price.toFixed(2)}</span>
        </p>
      </div>
      <p className="justify-self-end font-bold">${totalCost.toFixed(2)}</p>
    </div>
  );
};
