import Banner from "../../components/Banners/Banner";
import CatSlider from "../../components/CatSlider/CatSlider";
import HomeSlider from "./HomeSlider";
import "./Home.css";
import Product from "../../components/Product/Product";

const Home = () => {
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

          <div className="row productRow">
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
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
