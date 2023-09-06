/* eslint-disable react/prop-types */
import Nav from "../Components/Nav";
import { Link } from "react-router-dom";
import styles from "./Pixza.module.css";

function Pizxa() {
  return (
    <main>
      <Nav />
      <div className={styles.pixza}>
        <div className={styles.heading}>
          <h1>Fresh Pizza. Fresh Taste.</h1>
          <Link to="order" className="cta">
            <p>Place an order</p>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Pizxa;
