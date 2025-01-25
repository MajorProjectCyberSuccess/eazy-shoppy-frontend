import "./Home.css";
import Slider from "react-slick";
import Banner from "../../components/Banners/Banner";
import CatSlider from "../../components/CatSlider/CatSlider";
import HomeSlider from "./HomeSlider";
import Product from "../../components/Product/Product";
import Banner1 from "./images/banner.jpg";
import Banner2 from "./images/banner1.jpg";
import Banner3 from "./images/banner2.jpg";
import Banner4 from "./images/banner3.jpg";
import Banner5 from "./images/banner4.jpg";
import TopPro from "./TopProducts/TopPro";

import TopProduct1 from "./images/toppro1.jpg";
import TopProduct2 from "./images/toppro2.jpg";
import TopProduct3 from "./images/toppro3.jpg";
// import Imgb1 from "./images/imgb1.jpg";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };

  const products = [
    {
      id: 1,
      image:
        "https://www.jiomart.com/images/product/original/490617278/haldiram-s-mini-bhakharwadi-200-g-product-images-o490617278-p490617278-0-202307131827.jpg?im=Resize=(360,360)",
      category: "Snacks",
      title: "Haldirams Namkeen - Aloo Bhujia, 200G",
      rating: 4.5,
      brand: "EazyShoppy",
      price: 2.5,
      oldPrice: 3,
      tag: "best",
      productLink: "/shop/product/details/1",
    },
    {
      id: 2,
      image:
        "https://www.jiomart.com/images/product/original/rviklciklo/jagdish-farshan-bhakharwadi-250-gm-pack-of-2-product-images-orviklciklo-p603850635-0-202308130006.jpg?im=Resize=(360,360)",
      category: "Snacks",
      title: "Jagdish Bhakarwadi - 250 gm",
      rating: 4,
      brand: "EazyShoppy",
      price: 3.2,
      oldPrice: 4,
      tag: "new",
      productLink: "/shop/product/details/2",
    },
    {
      id: 3,
      image:
        "https://www.jiomart.com/images/product/original/491696357/lay-s-spanish-tomato-tango-potato-chips-82-g-product-images-o491696357-p590121910-0-202410031824.jpg?im=Resize=(360,360)",
      category: "Snacks",
      title: "Lay's Potato Chips - Classic Salted, 52G",
      rating: 4.1,
      brand: "EazyShoppy",
      price: 1.2,
      oldPrice: 1.5,
      tag: "popular",
      productLink: "/shop/product/details/10",
    },
    {
      id: 4,
      image:
        "https://www.jiomart.com/images/product/original/492488606/sunfeast-dark-fantasy-choco-fills-562-5g-product-images-o492488606-p590838661-0-202410251300.jpg?im=Resize=(360,360)",
      category: "Biscuits",
      title: "Sunfeast Dark Fantasy - Choco Fills, 75G",
      rating: 4.7,
      brand: "EazyShoppy",
      price: 1.5,
      oldPrice: 2,
      tag: "new",
      productLink: "/shop/product/details/4",
    },
    {
      id: 5,
      image:
        "https://www.jiomart.com/images/product/original/491695463/britannia-good-day-cashew-biscuits-1-kg-product-images-o491695463-p590116903-0-202308241215.jpg?im=Resize=(360,360)",
      category: "Biscuits",
      title: "Britannia Good Day - Cashew Biscuits, 200G",
      rating: 4.2,
      brand: "EazyShoppy",
      price: 1.8,
      oldPrice: 2.5,
      tag: "best",
      productLink: "/shop/product/details/5",
    },
    {
      id: 6,
      image:
        "https://www.jiomart.com/images/product/original/490000827/kissan-mixed-fruit-jam-200-g-product-images-o490000827-p490000827-0-202305311354.jpg?im=Resize=(360,360)",
      category: "Spreads",
      title: "Kissan Mixed Fruit Jam - 200G",
      rating: 4.4,
      brand: "EazyShoppy",
      price: 3.5,
      oldPrice: 4.2,
      tag: "popular",
      productLink: "/shop/product/details/6",
    },
    {
      id: 7,
      image:
        "https://www.jiomart.com/images/product/original/490064731/nutella-ferrero-hazelnut-spread-with-cocoa-350-g-product-images-o490064731-p490064731-0-202211211354.jpg?im=Resize=(360,360)",
      category: "Spreads",
      title: "Nutella - Hazelnut Spread with Cocoa, 350G",
      rating: 4.8,
      brand: "EazyShoppy",
      price: 5.5,
      oldPrice: 6,
      tag: "best",
      productLink: "/shop/product/details/7",
    },
    {
      id: 8,
      image:
        "https://www.jiomart.com/images/product/original/491168210/amul-pasteurised-butter-200-g-tub-product-images-o491168210-p491168210-0-202203152232.jpg?im=Resize=(360,360)",
      category: "Dairy",
      title: "Amul Butter - Salted, 200G",
      rating: 4.9,
      brand: "EazyShoppy",
      price: 2.6,
      oldPrice: 3.2,
      tag: "new",
      productLink: "/shop/product/details/8",
    },
    {
      id: 9,
      image:
        "https://www.jiomart.com/images/product/original/490008739/parle-g-original-glucose-biscuits-800-g-product-images-o490008739-p490008739-0-202203170454.jpg?im=Resize=(360,360)",
      category: "Biscuits",
      title: "Parle-G Original Glucose Biscuit - 800G",
      rating: 4.6,
      brand: "EazyShoppy",
      price: 4.0,
      oldPrice: 4.5,
      tag: "best",
      productLink: "/shop/product/details/9",
    },
    {
      id: 10,
      image:
        "https://www.jiomart.com/images/product/original/491187258/good-life-moong-dal-500-g-product-images-o491187258-p491187258-0-202203152121.jpg?im=Resize=(360,360)",
      category: "Snacks",
      title: "Haldirams Namkeen - Masala Moong Dal, 200G",
      rating: 4.3,
      brand: "EazyShoppy",
      price: 2.8,
      oldPrice: 3.5,
      tag: "popular",
      productLink: "/shop/product/details/3",
    },
  ];

  // const product = {
  //   id: 3,
  //   image: Imgb1,
  //   category: "Snacks",
  //   title: "Haldirams Namkeen - Aloo Bhujia, 200G",
  //   rating: 4.5,
  //   brand: "EazyShoppy",
  //   price: 2.5,
  //   oldPrice: 3,
  //   tag: "sale",
  //   productLink: "/shop/product/details",
  //   onAddToCart: handleAddToCart,
  // };

  const tProducts = [
    {
      id: 1,
      name: "Minimalist Anti-Acne Kit, Skincare Routine Kit for Unisex...",
      image: TopProduct3,
      rating: 4.5,
      price: 1077,
      oldPrice: 1199,
    },
    {
      id: 2,
      name: "MYFITNESS Peanut Butter Chocolate 1.25kg",
      image: TopProduct1,
      rating: 4.0,
      price: 250,
      oldPrice: 450,
    },
    {
      id: 3,
      name: "Cadbury Dairy Milk Silk Chocolate Bar, 150 g (Pack of 3)",
      image: TopProduct2,
      rating: 4.7,
      price: 554,
      oldPrice: 650,
    },
  ];

  return (
    <>
      <HomeSlider />
      <CatSlider />
      <Banner />

      <section className="homeProducts">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <h2 className="hd mb-0 mt-0 mx-1">Popular Products</h2>
            <ul className="list list-inline ml-auto filterTab mb-0">
              <li className="list-inline-item">
                <a href="" className="cursor">
                  All
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">
                  Electronics
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">
                  Bags
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">
                  Footwear
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">
                  Groceries
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">
                  Beauty
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">
                  Jewellery
                </a>
              </li>
            </ul>
          </div>

          <div className="row productRow pt-2">
            {products.map((product) => (
              <div className="item" key={product.id}>
                <Product product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bannersSection pt-0 pb-0">
        <div className="container-fluid">
          <div className="row">
            <ul className="d-flex align-items-center">
              <li className="item item-inline">
                <img src={Banner4} />
              </li>
              <li className="item item-inline">
                <img src={Banner3} />
              </li>
              <li className="item item-inline">
                <img src={Banner2} />
              </li>
              <li className="item item-inline">
                <img src={Banner5} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="topProductsSection p-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <TopPro title="Top Selling" products={tProducts} />
            </div>
            <div className="col">
              <TopPro title="Trending Products" products={tProducts} />
            </div>
            <div className="col">
              <TopPro title="Recently added" products={tProducts} />
            </div>
            <div className="col">
              <TopPro title="Top Rated" products={tProducts} />
            </div>
          </div>
        </div>
      </section>

      <section className="homeProducts homeProductsRow2">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <h2 className="hd mb-0 mt-0 mx-1">Featured Products</h2>
          </div>
          <br />
          <div className="row">
            <div className="col-md-3 pr-5 proBanner">
              <img src={Banner1} alt="Banner" className="w-100 transition" />
            </div>
            <div className="col-md-9">
              <Slider {...settings} className="prodSlider">
                {products.map((product) => (
                  <div className="item" key={product.id}>
                    <Product product={product} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <br />
    </>
  );
};

export default Home;
