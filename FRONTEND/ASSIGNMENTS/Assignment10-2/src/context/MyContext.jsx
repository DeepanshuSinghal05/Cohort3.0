import { Children, createContext, useEffect, useState } from "react";
import axios from "axios";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);

  const [usersData, setUsersData] = useState(() => {
    return JSON.parse(localStorage.getItem("usersData")) || [];
  });

  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn")) || false
  );

  const getProductsdata = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data);
    } catch (error) {
      console.log("Error in API", error);
    }
  };

  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    getProductsdata();
  }, []);

  return (
    <MyStore.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        usersData,
        setUsersData,
        setProductsData,
        productsData,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
