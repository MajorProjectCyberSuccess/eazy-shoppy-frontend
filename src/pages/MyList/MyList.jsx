import "./MyList.css";
import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../../utility/CartContext";

const MyList = () => {
  const { wishlistItems, removeFromWishlist, moveToCart } =
    useContext(CartContext);
  // console.log(wishlistItems);
  return (
    <>
      <div className="container my-4">
        <h3>My List</h3>
        <p>
          There are <strong>{wishlistItems.length || 0}</strong> products in
          your Wishlist
        </p>
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Add to Cart</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {wishlistItems.map((item) => (
                <tr key={item.id}>
                  <td className="d-flex align-items-center">
                    <img
                      src={item.image}
                      alt={item.tile}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                        marginRight: "10px",
                      }}
                      className="rounded"
                    />
                    <div>
                      <p className="mb-1">
                        {item && item.title
                          ? item.title.length > 40
                            ? item.title.substr(0, 40) + "..."
                            : item.title
                          : "No Name"}
                      </p>
                      <div className="d-flex align-items-center">
                        <span className="text-warning me-1">
                          {"★".repeat(item.rating)}
                          {"☆".repeat(5 - item.rating)}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>Rs: {item.price}</td>
                  <td>
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => moveToCart(item)}
                    >
                      Move to Cart
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <i className="bi bi-trash"></i> Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

MyList.propTypes = {
  items: PropTypes.array,
};

export default MyList;
