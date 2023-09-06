/* eslint-disable react/prop-types */
import EachCart from "../Components/EachCart";
import styles from "./Cart.module.css";

function Cart({ cartItem }) {
  return (
    <div className={styles.each}>
      <div className={styles.eachInner}>
        {cartItem.map((cart) => (
          <EachCart key={cartItem.name} cart={cart} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
