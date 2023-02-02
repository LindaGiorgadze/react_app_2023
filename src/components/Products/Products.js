import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../../context/cartContext";
import Button from "../Button";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(CartContext);
  console.log(cart);
  useEffect(() => {
    axios
      .get("https://lindagiorgadze.github.io/FakeServer/products.json")
      .then((response) => {
        setProducts(response.data?.Products);
        console.log(response.data?.Products);
      });
  }, []);
  return (
    <div>
      <h3>Products List</h3>
      <div className="grid">
        {products?.map((product) => {
          return (
            <div
              // onClick={() => navigate(`/products/${product.id}`)}
              className="productCard"
              key={product.id}
            >
              <div className="row align-items-center">
                <h2 className="col">{product.title}</h2>
                <Button customClass='col' onClick={() => setCart([...cart, product])} />
              </div>

              <img src={product.img} alt={product.title} />
              <Link to={`/products/${product.id}`}>See more details</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
