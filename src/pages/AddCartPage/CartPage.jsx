import "./CartPage.css";
import { useContext } from "react";

import { CartContext } from "../../utility/CartContext";

import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);

  const calculateTotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  // const [cartItems, setCartItems] = useState([
  //   {
  //     id: 1,
  //     name: "Men White & Navy Blue Colorblocked Lightweight Com...",
  //     price: 1500,
  //     quantity: 1,
  //     image: Cart1,
  //   },
  //   {
  //     id: 2,
  //     name: "VNEED Women Embroidered Rayon Kurta Pant Set | Kur...",
  //     price: 450,
  //     quantity: 1,
  //     image: Cart2,
  //   },
  // ]);

  // const handleQuantityChange = (id, action) => {
  //   setCartItems((prevItems) =>
  //     prevItems.map((item) =>
  //       item.id === id
  //         ? {
  //             ...item,
  //             quantity:
  //               action === "increment"
  //                 ? item.quantity + 1
  //                 : Math.max(1, item.quantity - 1),
  //           }
  //         : item
  //     )
  //   );
  // };

  // const handleRemove = (id) => {
  //   setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  // };

  // const calculateTotal = () =>
  //   cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  console.log(cartItems);
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
                  {cartItems.map((item, index) => (
                    <tr key={item.id || index}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src={item.image} alt={item.image} />
                          <p>
                            {item && item.name
                              ? item.name.length > 40
                                ? item.name.substr(0, 40) + "..."
                                : item.name
                              : "No Name"}
                            {/* {item.name} */}
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
