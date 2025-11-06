import ProductCartBox from "./components/Cart/ProductCartBox";
import ProductsList from "./components/Product/ProductsList";
import data from "./data.json";

const products = data.map((item, i) => ({
  ...item,
  id: i + 1,
  price: item.price,
}));

function App() {
  return (
    <div className="flex flex-col gap-9 sm:flex-row">
      <ProductsList products={products} />
      <ProductCartBox />
    </div>
  );
}

export default App;
