import React from "react";
import "./Product.css";
import { CartContext } from "../components/CartContext";
import { useContext } from "react";
import {RiDeleteBin4Fill} from "react-icons/ri"
function Product(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);
  return (
    <div className="product">
      <div className="product-card" key={product.id}>
        <img src={product.url} alt="wig" />
        <p>{product.name}</p>
        <div className="product-details">
          <p>Incart: {productQuantity}</p>
          <p>${product.price}</p>
        </div>
        {productQuantity > 0 ? (
          <div className="incart">
            <button
              className="decrement"
              onClick={() => cart.removeFromCart(product.id)}
            >
              -
            </button>

            <button
              className="increment"
              onClick={() => cart.addToCart(product.id)}
            >
              +
            </button>
            <div className="bin" onClick={() => cart.deleteFromCart(product.id)}><RiDeleteBin4Fill/></div>
          </div>
        ) : (
          <button
            className="add-to-cart"
            onClick={() => cart.addToCart(product.id)}
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
