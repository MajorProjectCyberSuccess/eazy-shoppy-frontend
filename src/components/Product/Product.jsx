// import Imgb1 from "./images/imgb1.jpg";
import { useContext } from "react";

import "./Product.css";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { GrView } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";

import { CartContext } from "../../utility/CartContext";

const Product = ({ product }) => {
  const { addToCart, addToWishlist } = useContext(CartContext);

  // const handleAddToCart = async () => {
  //   const sessionId = localStorage.getItem("sessionId");
  //   if (!sessionId) {
  //     toast.error("Please log in first to add products to your cart."); // Show toast
  //     navigate("/signin"); // Redirect to the SignIn page
  //     return;
  //   }

  //   try {
  //     await axios.post(
  //       "http://localhost:8000/api/cart/add",
  //       { productId: product.id },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${sessionId}`,
  //         },
  //       }
  //     );
  //     alert("Product added to cart!");
  //   } catch (error) {
  //     console.error("Error adding to cart:", error);
  //   }
  // };

  const handleAddToCart = () => {
    const productToAdd = {
      id: product.id,
      name: product.title,
      price: product.price,
      quantity: 1,
      image: product.image,
    };
    // console.log("productToAdd", productToAdd);
    addToCart(productToAdd);
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="productContainer transition">
      {product.tag && (
        <span className={`badge ${product.tag}`}>{product.tag}</span>
      )}

      <div className="imgWrapper">
        <img
          src={product.image}
          alt={product.title}
          className="w-100 transition"
        />
        <div className="overlay transition">
          <ul className="list list-inline mb-0">
            <li className="list-inline-item">
              <Tooltip title="Wishlist" placement="top-start">
                <Link to="">
                  <FaRegHeart
                    size={18}
                    onClick={() => addToWishlist(product)}
                  />
                </Link>
              </Tooltip>
            </li>

            <li className="list-inline-item">
              <Tooltip title="See" placement="top-end">
                <Link to={`/shop/product/details/${product.id}`}>
                  <GrView size={18} />
                </Link>
              </Tooltip>
            </li>
          </ul>
        </div>
      </div>

      <div className="info">
        <span className="d-block catName">{product.category}</span>
        <h4 className="title">
          <Link to={`/shop/product/details/${product.id}`}>
            {product.title}
          </Link>
        </h4>
        <Stack spacing={1}>
          <Rating
            className="rating"
            name="half-rating-read"
            defaultValue={product.rating}
            precision={0.5}
            readOnly
          />
        </Stack>
        <span className="brand d-block text-g">
          by <Link className="text-g">{product.brand}</Link>
        </span>
        <div className="d-flex align-item-center mt-3">
          <div className="d-flex align-item-center priceWrap">
            <span className="price text-g font-weight-bold">
              ${product.price}
            </span>
            {product.oldPrice && (
              <span className="oldPrice">${product.oldPrice}</span>
            )}
          </div>
          <button className="text-g transition" onClick={handleAddToCart}>
            <PiShoppingCartSimpleBold
              size={15}
              style={{ transform: "translateY(-2px)" }}
            />{" "}
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    tag: PropTypes.string,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number,
    productLink: PropTypes.string.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func,
};

export default Product;
