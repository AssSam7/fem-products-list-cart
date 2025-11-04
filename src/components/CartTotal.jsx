export default function CartTotal({ total }) {
  return (
    <div className="my-3 flex justify-between items-center">
      <p>Order Total</p>
      <p className="font-extrabold text-3xl">${total}</p>
    </div>
  );
}
