import "./CartPage.css";
import { useState } from "react";

import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";

import Cart1 from "./images/cart1.jpg";
import Cart2 from "./images/cart2.jpg";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Men White & Navy Blue Colorblocked Lightweight Com...",
      price: 1500,
      quantity: 1,
      image: Cart1,
    },
    {
      id: 2,
      name: "VNEED Women Embroidered Rayon Kurta Pant Set | Kur...",
      price: 450,
      quantity: 1,
      image: Cart2,
    },
  ]);

  const handleQuantityChange = (id, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === "increment"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <div className="breadcrumbWrapper">
        <div className="container-fluid">
          <ul className="breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Shop</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
      <div className="cart-page">
        <h2>Your Cart</h2>
        <div className="container-fluid">
          <p>There are {cartItems.length} products in your cart</p>
          <div className="row">
            <div className="col-md-9 ">
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src={item.image} alt={item.name} />
                          <p className="m-2 p-2">{item.name}</p>
                        </div>
                      </td>
                      <td>Rs: {item.price}</td>
                      <td>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, "decrement")
                          }
                        >
                          -
                        </button>
                        {item.quantity}
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, "increment")
                          }
                        >
                          +
                        </button>
                      </td>
                      <td>Rs: {item.price * item.quantity}</td>
                      <td>
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="del"
                        >
                          <AiFillDelete size={22} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-md-3 card p-lg-2">
              <div className="cart-summary p-1">
                <div className="d-flex align-items-center mb-1">
                  <p>Subtotal </p>
                  <h3 className="ml-auto mb-0 fw-bold">
                    <span className="text-g">₹{calculateTotal()}</span>
                  </h3>
                </div>
                <div className="d-flex align-items-center mb-1">
                  <p>Shipping </p>
                  <h3 className="ml-auto mb-0 fw-medium">
                    <span>Free</span>
                  </h3>
                </div>
                <div className="d-flex align-items-center mb-1">
                  <p>Estimate for</p>
                  <h3 className="ml-auto mb-0 fw-medium">
                    <span>Asia & all Regions</span>
                  </h3>
                </div>
                <div className="d-flex align-items-center mb-1">
                  <p>Total </p>
                  <h3 className="ml-auto mb-0 fw-bold">
                    <span className="text-g">₹{calculateTotal()}</span>
                  </h3>
                </div>
                <button>Proceed To Checkout</button>
              </div>
            </div>
          </div>
          <Link to={"/"}>
            <button>← Continue Shopping</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartPage;
