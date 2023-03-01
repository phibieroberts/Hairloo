import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../Modal";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function Navbar() {
  const cart = useContext(CartContext);
  const [clicked, setClicked] = useState(false);

  const handleModal = () => {
    setClicked(!clicked);

  };
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <div className="navbar">
      <div className="nav">
        <h1 className="logo">HairLOO💦</h1>

        <div className="cart" onClick={handleModal}>
          <p>Cart<span className="cartup"> {productsCount}</span></p>
        </div>
      </div>
      {clicked && <Modal handleModal={handleModal} productsCount={productsCount} />}
    </div>
  );
}

export default Navbar;
