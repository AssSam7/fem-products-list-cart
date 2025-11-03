import ProductCart from "./components/ProductCart";
import ProductsList from "./components/ProductsList";
import products from "./data.json";

function App() {
  return (
    <div className="flex gap-9">
      <ProductsList products={products} />
      <ProductCart />
    </div>
  );
}

export default App;
