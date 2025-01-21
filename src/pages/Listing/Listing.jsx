import SideBarFilter from "../../components/SideBarFilter/SideBarFilter";
import "./Listing.css";
// import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Banner1 from "./images/b1.jpg";
import Banner2 from "./images/b2.jpg";
import Product from "../../components/Product/Product";

const Listing = () => {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/listing" },
    { name: "Food", path: "/listing/food" },
  ];
  return (
    <section className="allListingPage">
      <div className="container-fluid">
        {/* Breadcrumb Section */}
        <div className="breadcrumbWrap">
          <h1>Cloths</h1>
          <Breadcrumb breadcrumbItems={breadcrumbItems} />
        </div>

        {/* Main Content */}
        <div className="listingData">
          {/* Sidebar */}
          <div className="col-md-3 sideBarWrapper">
            <div className="card">
              <SideBarFilter />
            </div>
            <div>
              <div className="bannerImg">
                <div>
                  <img src={Banner2} alt="banner" className="w-100" />
                </div>
                <div>
                  <img src={Banner1} alt="banner" className="w-100" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-md-9 rightContent">
            <div className="topStrip p-2 mb-3">
              <p className="mb-0">
                We found <span className="text-success">29</span> item for you!
              </p>
            </div>

            <div className="products-container">
              <div className="item">
                <Product tag="hot" />
              </div>
              <div className="item">
                <Product />
              </div>
              <div className="item">
                <Product />
              </div>
              <div className="item">
                <Product tag="new" />
              </div>
              <div className="item">
                <Product />
              </div>
              <div className="item">
                <Product />
              </div>
              <div className="item">
                <Product />
              </div>
              <div className="item">
                <Product />
              </div>
              <div className="item">
                <Product />
              </div>
              <div className="item">
                <Product />
              </div>
              <div className="item">
                <Product tag="new" />
              </div>
              <div className="item">
                <Product />
              </div>
              <div className="item">
                <Product />
              </div>
              <div className="item">
                <Product />
              </div>
              <div className="item">
                <Product />
              </div>
              <div className="item">
                <Product />
              </div>
              <div className="item">
                <Product />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listing;
