import ProductCard from "./ProductCard";

export default function ProductsList({ products }) {
  return (
    <div className="flex flex-col gap-6 w-[60vw]">
      <h1 className="text-4xl font-bold">Desserts</h1>
      <div className="grid grid-cols-3 gap-5">
        {products.map(({ image, ...rest }) => (
          <ProductCard
            imgSrc={image["desktop"]}
            onAddToCart={() => {}}
            {...rest}
          />
        ))}
      </div>
    </div>
  );
}
