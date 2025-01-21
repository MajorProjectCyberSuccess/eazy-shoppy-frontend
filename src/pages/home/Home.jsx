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

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };
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
              <TopPro title="Top Selling" />
            </div>
            <div className="col">
              <TopPro title="Trending Products" />
            </div>
            <div className="col">
              <TopPro title="Recently added" />
            </div>
            <div className="col">
              <TopPro title="Top Rated" />
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
      </section>

      <br />
    </>
  );
};

export default Home;
