import React, { useContext, useEffect, useState } from "react";
import { get, set } from "react-hook-form";
import Navbar from "./components/Navbar";
import axios from "axios";
import ProductCard from "./components/ProductCard";
import CartScreen from "./pages/CartScreen";
import { MyStore } from "./context/MyContext";

const App = () => {
  const [productsData, setProductsData] = useState([]);
  let { isCartOpen, cartItems } = useContext(MyStore);

  const getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");

      setProductsData(res.data);
    } catch (error) {
      console.log("error in API", error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="h-screen p-2 flex flex-col gap-4">
      <Navbar />

      {isCartOpen ? (
        <div className="h-screen ">
          <CartScreen />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {productsData.map((elem) => {
            let isInCart = cartItems.find((val) => val.id === elem.id);
            return (
              <ProductCard product={elem} key={elem.id} isInCart={isInCart} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
