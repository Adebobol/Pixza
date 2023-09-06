/* eslint-disable react/prop-types */

import styles from "./ButtonClick.module.css";

function ButtonClick({ children, handle }) {
  return (
    <p className={styles.buttonClick} onClick={handle}>
      {children}
    </p>
  );
}

export default ButtonClick;
