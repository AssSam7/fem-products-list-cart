import ProductsList from "./components/ProductsList";
import products from "./data.json";

function App() {
  return (
    <div className="container">
      <ProductsList products={products} />
    </div>
  );
}

export default App;
