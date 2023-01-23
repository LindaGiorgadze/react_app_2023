import { Route, Routes } from "react-router-dom";
import "./App.css";
import ButtonSection from "./components/ButtonSection";
import CounterForm from "./components/CounterForm";
import Header from "./components/Header";
import ToDo from "./components/ToDo";
import Form from "./components/Form";
import Products from "./components/Products/Products";
import ProductsDetails from "./components/Products/ProductDetails";

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ToDo />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductsDetails />} />
        <Route path="/button-section" element={<ButtonSection />} />
        <Route path="/counter" element={<CounterForm />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
