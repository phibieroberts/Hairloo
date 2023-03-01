import React from "react";
import "./modal.css";
import { useContext } from "react";
import { CartContext } from "./components/CartContext";
import CartProducts from "./components/CartProducts";
import { FaTimes} from "react-icons/fa"

function Modal({ handleModal, productsCount }) {
  const cart = useContext(CartContext);

  const checkout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        if (response.url) {
          window.location.assign(response.url); // forwarding users to stripe
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-header">
          <h3>Shopping Cart</h3>
          <h1 className="close" onClick={handleModal}>
            <FaTimes />
          </h1>
        </div>
        <div className="modal-body">
          {productsCount > 0 ? (
            <>
              <p className="items"> Items in your cart: </p>
              {cart.items.map((currentProduct, id) => (
                <CartProducts
                  key={id}
                  id={currentProduct.id}
                  quantity={currentProduct.quantity}
                ></CartProducts>
              ))}

              <div className="total">
                {" "}
                <h1>Total: ${cart.getTotalCost().toFixed(2)}</h1>
              </div>
              <button className="purchase" onClick={checkout}>
                Purchase Items
              </button>
            </>
          ) : (
            <h3>Your cart is Empty</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
