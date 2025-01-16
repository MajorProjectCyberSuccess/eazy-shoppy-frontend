import "./Product.css";
import PropTypes from "prop-types";
import Img1 from "./images/img1.jpg";
// import Imgb1 from "./images/imgb1.jpg";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { GrView } from "react-icons/gr";
import { MdCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const Product = (props) => {
  return (
    <div className="productContainer transition">
      {props.tag !== null && props.tag !== undefined && (
        <span className={`badge ${props.tag}`}>{props.tag}</span>
      )}
      <Link>
        <div className="imgWrapper">
          <img src={Img1} className="w-100 transition" />
          <div className="overlay transition">
            <ul className="list list-inline mb-0">
              <li className="list-inline-item">
                <Tooltip title="Wishlist" placement="top-start">
                  <Link>
                    <FaRegHeart size={18} />
                  </Link>
                </Tooltip>
              </li>
              <li className="list-inline-item">
                <Tooltip title="Compere" placement="top">
                  <Link>
                    <MdCompareArrows size={18} />
                  </Link>
                </Tooltip>
              </li>
              <li className="list-inline-item">
                <Tooltip title="See" placement="top-end">
                  <Link>
                    <GrView size={18} />
                  </Link>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </Link>
      <div className="info">
        <span className="d-block catName">Snack</span>
        <h4 className="title">
          <Link>Haldirams Namkeen - Aloo Bhujia, 200G</Link>
        </h4>
        <Stack spacing={1}>
          <Rating
            className="rating"
            name="half-rating-read"
            defaultValue={3.5}
            precision={0.5}
            readOnly
          />
        </Stack>
        <span className="brand d-block text-g">
          by <Link className="text-g">EazyShoppy</Link>
        </span>
        <div className="d-flex align-item-center mt-3">
          <div className="d-flex align-item-center priceWrap">
            <span className="price text-g font-weight-bold">$2.5</span>
            <span className="oldPrice">$3</span>
          </div>
          <button className="text-g transition">
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
  tag: PropTypes.string,
};

export default Product;
