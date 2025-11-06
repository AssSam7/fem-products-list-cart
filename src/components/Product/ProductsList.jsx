import ProductCard from "./ProductCard";

export default function ProductsList({ products }) {
  return (
    <div className="flex w-full flex-col gap-6 sm:w-[60vw]">
      <h1 className="text-4xl font-bold">Desserts</h1>
      <div className="grid gap-5 sm:grid-cols-1 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}
