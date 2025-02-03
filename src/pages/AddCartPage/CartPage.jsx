import "./CartPage.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../utility/CartContext";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, isLoading, error } =
    useContext(CartContext);
  const [localCartItems, setLocalCartItems] = useState([]);

  // Sync local state with context cartItems
  useEffect(() => {
    if (cartItems) {
      setLocalCartItems(cartItems);
    }
  }, [cartItems]);

  const calculateTotal = () =>
    localCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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
          <p>There are {localCartItems.length} products in your cart</p>
          <div className="row">
            <div className="col-md-9">
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
                  {localCartItems.map((item, index) => (
                    <tr key={item.id || index}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src={item.image} alt={item.name} />
                          <p>
                            {item && item.name
                              ? item.name.length > 40
                                ? item.name.substr(0, 40) + "..."
                                : item.name
                              : "No Name"}
                          </p>
                        </div>
                      </td>
                      <td>₹{item.price}</td>
                      <td>
                        <button
                          onClick={() => updateQuantity(item.id, "decrement")}
                        >
                          -
                        </button>
                        {item.quantity}
                        <button
                          onClick={() => updateQuantity(item.id, "increment")}
                        >
                          +
                        </button>
                      </td>
                      <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                      <td>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="del"
                        >
                          <AiFillDelete />
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
                    <span className="text-g">
                      ₹{calculateTotal().toFixed(2)}
                    </span>
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
                    <span className="text-g">
                      ₹{calculateTotal().toFixed(2)}
                    </span>
                  </h3>
                </div>
                <Link to={"/shop/cart/checkout"}>
                  <button>Proceed To Checkout</button>
                </Link>
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
