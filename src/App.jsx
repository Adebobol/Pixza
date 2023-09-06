import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pixza from "./Pages/Pixza";
import Order from "./Pages/Order";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import { useState } from "react";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  const pizzas = pizzaData;
  const [cart, setCart] = useState(0);
  const [cartItem, setCartItem] = useState([]);
  function carTi(pixza) {
    setCartItem((cartItem) => [...cartItem, pixza]);
    console.log(cartItem);
  }

  function carTiX(name) {
    setCartItem(cartItem.filter((cart) => cart.name !== name));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Pixza />} />
        <Route
          path="order"
          element={
            <Order
              pizzas={pizzas}
              cart={cart}
              setCart={setCart}
              onCarTi={carTi}
              onCarTiX={carTiX}
            />
          }
        />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart cartItem={cartItem} />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
