/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./PizzaEach.module.css";

import ButtonClick from "./ButtonClick";

function PizzaEach({
  pizza,
  cart,
  setCart,
  num,
  curOpen,
  setCurOpen,
  onCartItem,
  onCarTiX,
}) {
  const isClick = num === curOpen;
  const [quantity, setQuantity] = useState(0);

  function handleClick() {
    if (isClick) {
      onCarTiX(pizza.name);
      setQuantity(0);
    } else {
      onCartItem(pizza);
    }
    setCurOpen(isClick ? null : num);
    setCart(isClick ? cart - 1 : cart + 1);
  }

  function handleAdd() {
    if (quantity === 5) return;
    setQuantity((add) => add + 1);
  }

  function handleSub() {
    if (quantity === 0) return;
    setQuantity((sub) => sub - 1);
  }

  return (
    <div className={styles.pizzaEach}>
      <img src={pizza.photoName} alt="" />
      <div className={styles.info}>
        <div>
          {isClick && (
            <div className={styles.but}>
              <ButtonClick handle={handleSub}>-</ButtonClick>
              <p>{quantity}</p>
              <ButtonClick handle={handleAdd}>+</ButtonClick>
            </div>
          )}
          {pizza.soldOut ? (
            <h4>Sold Out</h4>
          ) : (
            <Link className={styles.cart} onClick={handleClick}>
              {isClick ? "Cancel" : "Add To Cart"}
            </Link>
          )}
        </div>
        <div>
          <h4>{pizza.name}</h4>
          <h5>{pizza.ingredients}</h5>
        </div>
        <p>
          &euro;
          {`${pizza.price}`}
        </p>
      </div>
    </div>
  );
}

export default PizzaEach;
