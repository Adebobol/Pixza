/* eslint-disable react/prop-types */

import styles from "./EachCart.module.css";

function EachCart({ cart }) {
  return (
    <div className={styles.eachCart}>
      <img src={cart.photoName} alt="" />
      <hr />
    </div>
  );
}

export default EachCart;
