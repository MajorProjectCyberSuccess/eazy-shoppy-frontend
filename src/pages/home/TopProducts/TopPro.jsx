import "./TopPro.css";
import PropTypes from "prop-types";
import TopProduct1 from "../images/toppro1.jpg";
import TopProduct2 from "../images/toppro2.jpg";
import TopProduct3 from "../images/toppro3.jpg";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";

const TopPro = (props) => {
  const selectedItem = `Minimalist Anti-Acne Kit, Skincare Routine Kit for Unisex,
                Salicylic Acid Face Wash, Vitamin B5 Moisturizer, and Salicylic
                Acid Serum Combo`;
  return (
    <>
      <div className="topSelling_box p-2">
        <h3>{props.title}</h3>
        <div className="items d-flex align-items-center">
          <div className="img">
            <Link to="/product/details">
              <img src={TopProduct3} className="w-100" />
            </Link>
          </div>
          <div className="info px-3">
            <Link to="/product/details">
              <h4>
                {selectedItem.length > 40
                  ? selectedItem.substr(0, 40) + "..."
                  : selectedItem}
              </h4>
            </Link>
            <Stack spacing={1}>
              <Rating
                className="rating"
                name="half-rating-read"
                defaultValue={3.5}
                precision={0.5}
                readOnly
              />
            </Stack>
            <div className="d-flex align-item-center priceWrap">
              <span className="price text-g font-weight-bold">₹1,077</span>
              <span className="oldPrice">₹1,199</span>
            </div>
          </div>
        </div>
        <div className="items d-flex align-items-center">
          <div className="img">
            <Link to="">
              <img src={TopProduct1} className="w-100" />
            </Link>
          </div>
          <div className="info px-3">
            <Link to="">
              <h4>MYFITNESS Peanut Butter Chocolate 1.25kg </h4>
            </Link>
            <Stack spacing={1}>
              <Rating
                className="rating"
                name="half-rating-read"
                defaultValue={3.5}
                precision={0.5}
                readOnly
              />
            </Stack>
            <div className="d-flex align-item-center priceWrap">
              <span className="price text-g font-weight-bold">₹250</span>
              <span className="oldPrice">₹450</span>
            </div>
          </div>
        </div>
        <div className="items d-flex align-items-center">
          <div className="img">
            <Link to="">
              <img src={TopProduct2} className="w-100" />
            </Link>
          </div>
          <div className="info px-3">
            <Link to="">
              <h4>Cadbury Dairy Milk Silk Chocolate Bar, 150 g (Pack of 3)</h4>
            </Link>
            <Stack spacing={1}>
              <Rating
                className="rating"
                name="half-rating-read"
                defaultValue={3.5}
                precision={0.5}
                readOnly
              />
            </Stack>
            <div className="d-flex align-item-center priceWrap">
              <span className="price text-g font-weight-bold">₹554</span>
              <span className="oldPrice">₹650</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

TopPro.propTypes = {
  title: PropTypes.string,
};

export default TopPro;
