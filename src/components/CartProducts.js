import React from "react";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { getProductData } from "../productsStore";
import "./Cart.css";

function CartProducts(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  return (
    <div className="cart-products">
      <div className="cart-item">
        <div className="details">
          <img src={productData.url} alt="" />
          <h3>{productData.name}</h3>
          <p>{quantity} total</p>
          <p>Price: ${(quantity * productData.price).toFixed(2)}</p>
        </div>
        <div className="buttons">
            <div className="increase-decrease">
          <button className="decrement" onClick={() => cart.removeFromCart(id)}>
            -
          </button>
          <button className="increment" onClick={() => cart.addToCart(id)}>
            +
          </button>
          </div>
          <button onClick={() => cart.deleteFromCart(id)} className="delete">
            Remove
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default CartProducts;
