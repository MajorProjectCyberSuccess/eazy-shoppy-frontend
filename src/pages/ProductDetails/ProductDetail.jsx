import { useState } from "react";

import "./ProductDetail.css";
import bhakar1 from "./images/bhakar1.jpg";
import bhakar2 from "./images/bhakar2.jpg";
import bhakar3 from "./images/bhakar3.jpg";
import bhakar4 from "./images/bhakar4.jpg";
// import bhakar5 from "./images/bhakar5.jpg";

import { Link } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Slider from "react-slick";

import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";

import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import ReviewForm from "../../components/RevireForm/ReviewForm";
import Product from "../../components/Product/Product";

const ProductDetail = () => {
  const images = [
    {
      src: bhakar1,
      zoomSrc: bhakar1,
    },
    {
      src: bhakar2,
      zoomSrc: bhakar2,
    },
    {
      src: bhakar3,
      zoomSrc: bhakar3,
    },
    {
      src: bhakar4,
      zoomSrc: bhakar4,
    },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [activeSize, setActiveSize] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  const [liked, setLiked] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const related = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <>
      <div className="detailPage mb-5">
        <div className="breadcrumbWrapper">
          <div className="container-fluid">
            <ul className="breadcrumb">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Product</Link>
              </li>
              <li>Dhawak Gujrati Mini Bhakarwadi</li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {/* product Zoom Start */}
            <div className="col-md-5 part1">
              <div className="productZoom">
                <InnerImageZoom
                  src={selectedImage.src}
                  zoomSrc={selectedImage.zoomSrc}
                  zoomType="hover"
                  className="img-fluid"
                />
              </div>
              <div className="thumbnail-section d-flex justify-content-center gap-3">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`thumbnail ${
                      selectedImage.src === image.src ? "active" : ""
                    }`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image.src}
                      alt={`Thumbnail ${index + 1}`}
                      className="img-fluid"
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* product Zoom end */}

            {/* product Info end */}
            <div className="col-md-7 part2 productInfo mb-0">
              <h1>
                Dhawak Gujrati Mini Bhakarwadi 500 gms (Crunchy and Tasty) Jar
                Pack
              </h1>
              <span className="brand d-block text-g">
                by <Link className="text-g">EazyShoppy</Link>
              </span>
              <div className="d-flex align-items-center">
                <Stack spacing={1}>
                  <Rating
                    className="rating"
                    name="half-rating-read"
                    defaultValue={3.5}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
                <span>&nbsp; (32 reviews)</span>
              </div>
              <div className="priceSec d-flex align-items center mb-3">
                <span className="text-g priceLarge">₹219</span>
                <div className="ml-2 d-flex flex-column">
                  <span className="text-org">63% off</span>
                  <span className="olPrice">₹599</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                sed eum exercitationem! Iusto soluta totam sunt repellat nam
                numquam porro perspiciatis odio obcaecati deleniti ipsa quis,
                hic, minima dolorem. A.
              </p>
              <div className="productSize d-flex align-items-center">
                <span>Size / Weight:</span>
                <ul className="list list-inline mb-0">
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 0 ? "active" : ""}`}
                      onClick={() => setActiveSize(0)}
                    >
                      50g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 1 ? "active" : ""}`}
                      onClick={() => setActiveSize(1)}
                    >
                      60g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 2 ? "active" : ""}`}
                      onClick={() => setActiveSize(2)}
                    >
                      80g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 3 ? "active" : ""}`}
                      onClick={() => setActiveSize(3)}
                    >
                      100g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 4 ? "active" : ""}`}
                      onClick={() => setActiveSize(4)}
                    >
                      150g
                    </a>
                  </li>
                </ul>
              </div>

              <div className="addCartSection pt-3 pb-4 d-flex align-items-center">
                <div className="counterSec">
                  <input type="number" value={inputValue} />
                  <span
                    className="arr plus"
                    onClick={() => setInputValue(inputValue + 1)}
                  >
                    <IoIosArrowUp />
                  </span>
                  <span
                    className="arr minus"
                    onClick={() => {
                      if (inputValue !== 1) setInputValue(inputValue - 1);
                    }}
                  >
                    <IoIosArrowDown />
                  </span>
                </div>
                <Button className="bt">
                  <FaCartShopping />
                  &nbsp; Add to Cart
                </Button>
                <button className="heart bt" onClick={() => setLiked(!liked)}>
                  {liked ? (
                    <FaHeart size={23} color="#E63946" />
                  ) : (
                    <FaRegHeart size={23} color="#3bb77e" />
                  )}
                </button>
              </div>
            </div>
            {/* product Info end */}
          </div>
          <div className="card mt-5 p-5 detailsPageTabs">
            <div className="customTabs">
              <ul className="list list-inline">
                <li className="list-inline-item">
                  <button className="bt" onClick={() => setActiveTab(0)}>
                    Description
                  </button>
                </li>
                <li className="list-inline-item">
                  <button className="bt" onClick={() => setActiveTab(1)}>
                    Additional Info
                  </button>
                </li>
                <li className="list-inline-item">
                  <button className="bt" onClick={() => setActiveTab(2)}>
                    Reviews ({3})
                  </button>
                </li>
              </ul>
              <br />
              {activeTab === 0 && (
                <div className="tabContent">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sint, similique id odio quas numquam nam vero quam
                    repudiandae facilis dicta, voluptatem quaerat iusto ex quos!
                    Magni iusto consequuntur voluptatem quos! Accusamus
                    cupiditate voluptatum incidunt placeat debitis blanditiis
                    voluptatibus harum consequatur error quibusdam expedita
                    sequi corrupti, ducimus voluptate dolor dicta aut? Eaque sit
                    soluta accusamus autem molestias vero praesentium voluptatum
                    necessitatibus.
                  </p>
                  <hr />
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sint, similique id odio quas numquam nam vero quam
                    repudiandae facilis dicta, voluptatem quaerat iusto ex quos!
                    Magni iusto consequuntur voluptatem quos! Accusamus
                    cupiditate voluptatum incidunt placeat debitis blanditiis
                    voluptatibus harum consequatur error quibusdam expedita
                    sequi corrupti, ducimus voluptate dolor dicta aut? Eaque sit
                    soluta accusamus autem molestias vero praesentium voluptatum
                    necessitatibus. Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Sint, similique id odio quas numquam nam
                    vero quam repudiandae facilis dicta, voluptatem quaerat
                    iusto ex quos! Magni iusto consequuntur voluptatem quos!
                    Accusamus cupiditate voluptatum incidunt placeat debitis
                    blanditiis voluptatibus harum consequatur error quibusdam
                    expedita sequi corrupti, ducimus voluptate dolor dicta aut?
                    Eaque sit soluta accusamus autem molestias vero praesentium
                    voluptatum necessitatibus.
                  </p>
                </div>
              )}

              {activeTab === 1 && (
                <div className="tabContent">
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr>
                        <th
                          style={{ border: "1px solid #ddd", padding: "8px" }}
                        >
                          Property
                        </th>
                        <th
                          style={{ border: "1px solid #ddd", padding: "8px" }}
                        >
                          Value
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          property: "Stand Up",
                          value: '35"L x 24"W x 37-45"H (front to back wheel)',
                        },
                        {
                          property: "Folded (w/o wheels)",
                          value: '32.5"L x 18.5"W x 16.5"H',
                        },
                        {
                          property: "Folded (w/ wheels)",
                          value: '32.5"L x 24"W x 18.5"H',
                        },
                        { property: "Door Pass Through", value: "24" },
                        { property: "Frame", value: "Aluminum" },
                        { property: "Weight (w/o wheels)", value: "20 LBS" },
                        { property: "Weight Capacity", value: "60 LBS" },
                        { property: "Width", value: '24"' },
                        {
                          property: "Handle height (ground to handle)",
                          value: '37-45"',
                        },
                        {
                          property: "Wheels",
                          value: '12" air / wide track slick tread',
                        },
                        { property: "Seat back height", value: '24.5"' },
                      ].map((row, index) => (
                        <tr key={index}>
                          <td
                            style={{
                              border: "1px solid #ddd",
                              padding: "8px",
                            }}
                          >
                            {row.property}
                          </td>
                          <td
                            style={{
                              border: "1px solid #ddd",
                              padding: "8px",
                            }}
                          >
                            {row.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 2 && (
                <div className="tabContent">
                  <h3>Customer questions & answers</h3>
                  <div className="row mt-1">
                    <div className="col-md-10">
                      <br />
                      <div className="customerReviews">
                        <br />
                        <div className="card p-4 reviewsCard flex-row">
                          <div className="image">
                            <div className="rounded-circle">
                              <img
                                src="https://i.imgur.com/V3ICjlm.jpg"
                                alt="image"
                              />
                            </div>
                            <span className="text-g d-block text-center fw-bold">
                              Siman
                            </span>
                          </div>
                          <div className="info">
                            <div className="d-flex align-items-center mb-3">
                              <h5 className="datePosted mb-0">
                                Dec 4, 2024 at 3:12 pm
                              </h5>
                              <Rating
                                name="read-only"
                                value={3}
                                readOnly
                                className="ml-auto"
                              />
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Voluptatum ullam consectetur quae modi
                              cumque. Voluptatibus autem tempore odio nihil
                              omnis quibusdam. Rem, officiis alias. Obcaecati
                              voluptatum deleniti non consectetur atque.
                            </p>
                          </div>
                        </div>
                        <div className="card p-4 reviewsCard flex-row">
                          <div className="image">
                            <div className="rounded-circle">
                              <img
                                src="https://i.imgur.com/V3ICjlm.jpg"
                                alt="image"
                              />
                            </div>
                            <span className="text-g d-block text-center fw-bold">
                              Siman
                            </span>
                          </div>
                          <div className="info">
                            <div className="d-flex align-items-center mb-3">
                              <h5 className="datePosted mb-0">
                                Dec 4, 2024 at 3:12 pm
                              </h5>
                              <Rating
                                name="read-only"
                                value={3}
                                readOnly
                                className="ml-auto"
                              />
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Voluptatum ullam consectetur quae modi
                              cumque. Voluptatibus autem tempore odio nihil
                              omnis quibusdam. Rem, officiis alias. Obcaecati
                              voluptatum deleniti non consectetur atque.
                            </p>
                          </div>
                        </div>
                        <div className="card p-4 reviewsCard flex-row">
                          <div className="image">
                            <div className="rounded-circle">
                              <img
                                src="https://i.imgur.com/V3ICjlm.jpg"
                                alt="image"
                              />
                            </div>
                            <span className="text-g d-block text-center fw-bold">
                              Siman
                            </span>
                          </div>
                          <div className="info">
                            <div className="d-flex align-items-center mb-3">
                              <h5 className="datePosted mb-0">
                                Dec 4, 2024 at 3:12 pm
                              </h5>
                              <Rating
                                name="read-only"
                                value={3}
                                readOnly
                                className="ml-auto"
                              />
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Voluptatum ullam consectetur quae modi
                              cumque. Voluptatibus autem tempore odio nihil
                              omnis quibusdam. Rem, officiis alias. Obcaecati
                              voluptatum deleniti non consectetur atque.
                            </p>
                          </div>
                        </div>
                        <div className="card p-4 reviewsCard flex-row">
                          <div className="image">
                            <div className="rounded-circle">
                              <img
                                src="https://i.imgur.com/V3ICjlm.jpg"
                                alt="image"
                              />
                            </div>
                            <span className="text-g d-block text-center fw-bold">
                              Siman
                            </span>
                          </div>
                          <div className="info">
                            <div className="d-flex align-items-center mb-3">
                              <h5 className="datePosted mb-0">
                                Dec 4, 2024 at 3:12 pm
                              </h5>
                              <Rating
                                name="read-only"
                                value={3}
                                readOnly
                                className="ml-auto"
                              />
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Voluptatum ullam consectetur quae modi
                              cumque. Voluptatibus autem tempore odio nihil
                              omnis quibusdam. Rem, officiis alias. Obcaecati
                              voluptatum deleniti non consectetur atque.
                            </p>
                          </div>
                        </div>
                      </div>
                      <br />
                      <br />
                      <br />

                      <div>
                        <ReviewForm />
                      </div>
                    </div>
                    <div className="col-md-2"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <br />
          <br />
          <div className="relatedProducts pt-3 pb-4 m-4">
            <h2 className="hd mb-0 mt-0 mx-1">Related Products</h2>
            <hr />
            <Slider {...related} className="prodSlider">
              <div className="item">
                <Product tag="sale" />
              </div>
              <div className="item">
                <Product tag="hot" />
              </div>
              <div className="item">
                <Product tag="new" />
              </div>
              <div className="item">
                <Product />
              </div>
              <div className="item">
                <Product tag="best" />
              </div>
              <div className="item">
                <Product />
              </div>
              <div className="item">
                <Product tag="new" />
              </div>
              <div className="item">
                <Product tag="best" />
              </div>
              <div className="item">
                <Product tag="sale" />
              </div>
              <div className="item">
                <Product />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
