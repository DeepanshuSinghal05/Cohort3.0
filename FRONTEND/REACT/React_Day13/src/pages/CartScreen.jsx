import React, { useContext } from "react";
import CartProductCard from "../components/CartProductCard";
import { MyStore } from "../context/MyContext";

const CartScreen = ({}) => {
  let { cartItems } = useContext(MyStore);

  return (
    <div className=" grid grid-cols-3 h-[50%] gap-4">
      {cartItems.map((elem) => {
        return <CartProductCard key={elem.id} item={elem} />;
      })}
    </div>
  );
};

export default CartScreen;
