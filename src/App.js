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
import Gallery from "./components/Gallery";
import TitleContext from "./context/titleContext";
import CartContext from "./context/cartContext";
import { useState } from "react";

function App() {
  const { t } = useTranslation();
  const [cartList, setCartList] = useState([]);

  return (
    <CartContext.Provider
      value={{
        cart: cartList,
        setCart: setCartList
      }}
    >
      <TitleContext.Provider value={"Gallery"}>
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
            <Route path="gallery" element={<Gallery />} />
          </Routes>
        </div>
      </TitleContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
