import { Route, Routes } from "react-router-dom";
import "./App.scss";
import ButtonSection from "./components/ButtonSection";
import CounterForm from "./components/CounterForm";
import Header from "./components/Header";
import ToDo from "./components/ToDo";
import Form from "./components/Form";
import Products from "./components/Products/Products";
import ProductsDetails from "./components/Products/ProductDetails";
import { useTranslation } from "react-i18next";



function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <h4>{t("Welcome_to_React")}</h4>
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
