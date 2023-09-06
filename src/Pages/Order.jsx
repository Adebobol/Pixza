/* eslint-disable react/prop-types */

import { useState } from "react";
import Nav from "../Components/Nav";
import PizzaEach from "../Components/PizzaEach";
import styles from "./Order.module.css";

function Order({ pizzas, cart, setCart, onCarTi, onCarTiX }) {
  const [curOpen, setCurOpen] = useState(null);
  // const [cartItem, setCartItem] = useState([]);
  /*function carTi(pixza) {
    setCartItem((cartItem) => [...cartItem, pixza]);
    console.log(cartItem);
  }*/
  return (
    <div className={styles.order}>
      <Nav cart={cart} />
      <div className={styles.All}>
        {pizzas.map((pizza, i) => (
          <PizzaEach
            num={i}
            pizza={pizza}
            key={pizza.name}
            cart={cart}
            setCart={setCart}
            curOpen={curOpen}
            setCurOpen={setCurOpen}
            onCartItem={onCarTi}
            onCarTiX={onCarTiX}
          />
        ))}
      </div>
    </div>
  );
}

export default Order;
