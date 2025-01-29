import { useState, useContext, useEffect } from "react";

import "./ProductDetail.css";
// import bhakar1 from "./images/bhakar1.jpg";
import bhakar2 from "./images/bhakar2.jpg";
import bhakar3 from "./images/bhakar3.jpg";
import bhakar4 from "./images/bhakar4.jpg";
import bhakar5 from "./images/bhakar5.jpg";

// import { useParams } from "react-router-dom";
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
import Product from "../../components/Product/Product";
import { CartContext } from "../../utility/CartContext";

const ProductDetail = () => {
  const { addToCart, addToWishlist } = useContext(CartContext);
  const [relatedProducts] = useState([]); // Related products

  // const { id } = useParams();

  // // Fetch product details using the id
  // const [product, setProduct] = useState(null);
  // const [relatedProducts, setRelatedProducts] = useState([]); // Related products
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   const fetchProductDetails = async () => {
  //   try {
  //     // Fetch the current product details
  //     const productResponse = await axios.get(
  //       `http://localhost:8000/api/products/${id}`
  //     );
  //     setProduct(productResponse.data);

  //     // Fetch related products based on the category of the current product
  //     const relatedResponse = await axios.get(
  //       `http://localhost:8000/api/products?category=${productResponse.data.category}&exclude=${id}`
  //     );
  //     setRelatedProducts(relatedResponse.data);
  //   } catch (error) {
  //     console.error(error);
  //     setError("Failed to fetch product details.");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  //   fetchProductDetails();
  // }, [id]);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  // if (!product) {
  //   return <div>Product not found.</div>;
  // }

  // Static product data array
  const productData = {
    id: 1,
    title:
      "Dhawak Gujrati Mini Bhakarwadi 500 gms (Crunchy and Tasty) Jar Pack",
    brand: "EazyShoppy",
    rating: 3.5,
    reviews: 32,
    price: 219,
    originalPrice: 599,
    discount: "63% off",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sed eum exercitationem! Iusto soluta totam sunt repellat nam numquam porro perspiciatis odio obcaecati deleniti ipsa quis, hic, minima dolorem. A.",
    sizes: ["50g", "60g", "80g", "100g", "150g"],
    images: [
      {
        src: "https://www.jiomart.com/images/product/original/rviklciklo/jagdish-farshan-bhakharwadi-250-gm-pack-of-2-product-images-orviklciklo-p603850635-0-202308130006.jpg?im=Resize=(360,360)",
        zoomSrc:
          "https://www.jiomart.com/images/product/original/rviklciklo/jagdish-farshan-bhakharwadi-250-gm-pack-of-2-product-images-orviklciklo-p603850635-0-202308130006.jpg?im=Resize=(360,360)",
      },
      { src: bhakar2, zoomSrc: bhakar2 },
      { src: bhakar3, zoomSrc: bhakar3 },
      { src: bhakar4, zoomSrc: bhakar4 },
      { src: bhakar5, zoomSrc: bhakar5 },
    ],
  };

  // State hooks
  const [selectedImage, setSelectedImage] = useState(productData.images[0]);
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

  //review form
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Siman",
      date: "Dec 4, 2024 at 3:12 pm",
      rating: 3,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ullam consectetur quae modi cumque.",
    },
  ]); // Initial reviews

  const [formData, setFormData] = useState({
    name: "",
    rating: 0,
    comment: "",
  });

  // Load reviews from localStorage on component mount
  useEffect(() => {
    const savedReviews = localStorage.getItem("customerReviews");
    if (savedReviews) {
      console.log(
        "Loaded reviews from localStorage:",
        JSON.parse(savedReviews)
      );
      setReviews(JSON.parse(savedReviews));
    }
  }, []);

  useEffect(() => {
    console.log("Saving reviews to localStorage:", reviews);
    localStorage.setItem("customerReviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    if (!formData.name || !formData.rating || !formData.comment) {
      console.error("Form validation failed");
      return;
    }

    const newReview = {
      id: Date.now(),
      name: formData.name,
      rating: formData.rating,
      comment: formData.comment,
      date: new Date().toLocaleDateString(),
    };

    console.log("Adding new review:", newReview);
    setReviews((prev) => [newReview, ...prev]);
    setFormData({ name: "", rating: 0, comment: "" });
  };

  //   const handleAddToCart = async () => {
  //   const sessionId = localStorage.getItem("sessionId");
  //   if (!sessionId) {
  //     alert("Please log in first to add products to your cart."); // Show toast
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

  // add to cart
  const handleAddToCart = () => {
    const cartProducts = {
      id: productData.id,
      name: productData.title,
      price: productData.price,
      image: productData.images[0].src,
      quantity: inputValue,
    };
    addToCart(cartProducts);
  };

  const product = {
    image: bhakar5,
    category: "Snacks",
    title: "Haldirams Namkeen - Aloo Bhujia, 200G",
    rating: 4.5,
    brand: "EazyShoppy",
    price: 255,
    oldPrice: 399,
    tag: "hot",
    productLink: "/shop/product/details",
    onAddToCart: handleAddToCart,
  };

  return (
    <>
      <div className="detailPage mb-5">
        <div className="breadcrumbWrapper">
          <div className="container-fluid">
            <ul className="breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Product</Link>
              </li>
              <li>
                {productData.title.length > 50
                  ? productData.title.substr(0, 50) + "..."
                  : productData.title}
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {/* Product Zoom Section start */}
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
                {productData.images.map((image, index) => (
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
            {/* Product Zoom Section start */}

            {/* Product Info Section start */}
            <div className="col-md-7 part2 productInfo mb-0">
              <h1>{productData.title}</h1>
              <span className="brand d-block text-g">
                by <Link className="text-g">{productData.brand}</Link>
              </span>
              <div className="d-flex align-items-center">
                <Stack spacing={1}>
                  <Rating
                    className="rating"
                    name="half-rating-read"
                    defaultValue={productData.rating}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
                <span>&nbsp; ({productData.reviews} reviews)</span>
              </div>
              <div className="priceSec d-flex align-items-center mb-3">
                <span className="text-g priceLarge">₹{productData.price}</span>
                <div className="ml-2 d-flex flex-column">
                  <span className="text-org">{productData.discount}</span>
                  <span className="olPrice">₹{productData.originalPrice}</span>
                </div>
              </div>
              <p>{productData.description}</p>
              <div className="productSize d-flex align-items-center">
                <span>Size / Weight:</span>
                <ul className="list list-inline mb-0">
                  {productData.sizes.map((size, index) => (
                    <li className="list-inline-item" key={index}>
                      <a
                        className={`tag ${
                          activeSize === index ? "active" : ""
                        }`}
                        onClick={() => setActiveSize(index)}
                      >
                        {size}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="addCartSection pt-3 pb-4 d-flex align-items-center">
                <div className="counterSec">
                  <input
                    type="number"
                    value={inputValue}
                    onChange={(e) =>
                      setInputValue(parseInt(e.target.value) || 1)
                    }
                  />
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

                <Button className="bt" onClick={handleAddToCart}>
                  <FaCartShopping />
                  &nbsp; Add to Cart
                </Button>
                <button
                  className="heart bt"
                  onClick={() => {
                    setLiked(!liked);
                    addToWishlist(product);
                  }}
                >
                  {liked ? (
                    <FaHeart size={23} color="#E63946" />
                  ) : (
                    <FaRegHeart size={23} color="#3bb77e" />
                  )}
                </button>
              </div>
            </div>
            {/* Product Info Section end */}
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
                        {reviews.map((review) => (
                          <div
                            className="card p-4 reviewsCard flex-row"
                            key={review.id}
                          >
                            <div className="image">
                              <div className="rounded-circle">
                                <img
                                  src="https://i.imgur.com/V3ICjlm.jpg"
                                  alt="image"
                                  className="img-fluid"
                                />
                              </div>
                              <span className="text-g d-block text-center fw-bold">
                                {review.name}
                              </span>
                            </div>
                            <div className="info">
                              <div className="d-flex align-items-center mb-3">
                                <h5 className="datePosted mb-0">
                                  {review.date}
                                </h5>
                                <Rating
                                  name="read-only"
                                  value={review.rating}
                                  readOnly
                                  className="ml-auto"
                                />
                              </div>
                              <p>{review.comment}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <br />
                      <br />
                      <br />
                      <div>
                        <form onSubmit={handleSubmit} className="reviewForm">
                          <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                              Name:
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              className="form-control"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="rating" className="form-label">
                              Rating:
                            </label>
                            <Rating
                              name="rating"
                              value={formData.rating}
                              onChange={(e, newValue) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  rating: newValue,
                                }))
                              }
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="comment" className="form-label">
                              Comment:
                            </label>
                            <textarea
                              id="comment"
                              name="comment"
                              className="form-control"
                              rows="3"
                              value={formData.comment}
                              onChange={handleChange}
                              required
                            ></textarea>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Submit Review
                          </button>
                        </form>
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
            {relatedProducts.length > 0 ? (
              <>
                <h2 className="hd mb-0 mt-0 mx-1">Related Products</h2>
                <hr />
                <Slider {...related} className="prodSlider">
                  {relatedProducts.map((relatedProduct) => (
                    <div className="item" key={relatedProduct.id}>
                      <Product product={relatedProduct} />
                    </div>
                  ))}
                </Slider>
              </>
            ) : (
              <p>No related products found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
