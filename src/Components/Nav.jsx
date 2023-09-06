/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import Logo from "./Logo";

function Nav({ cart }) {
  return (
    <nav className={styles.nav}>
      {/* <Logo /> */}
      <ul>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/order">Order</NavLink>
        </li>
        <Logo />
        <li>
          <NavLink to="/cart">Cart {cart}</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={styles.ctaLink}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
