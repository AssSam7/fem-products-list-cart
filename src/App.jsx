import ProductCart from "./components/Cart/ProductCart";
import ProductsList from "./components/Product/ProductsList";
import data from "./data.json";

const products = data.map((item, i) => ({
  ...item,
  id: i + 1,
  price: item.price,
}));

function App() {
  return (
    <div className="flex gap-9">
      <ProductsList products={products} />
      <ProductCart />
    </div>
  );
}

export default App;
