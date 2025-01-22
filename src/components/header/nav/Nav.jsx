import "./Nav.css";
import "../../../css/style.css";
import { Link } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import { BiCategoryAlt } from "react-icons/bi";
import { RiCustomerService2Fill } from "react-icons/ri";

const Nav = () => {
  return (
    <div className="nav d-flex align-items-center">
      <div className="container-fluid">
        <div className="row position-relative">
          {/* DropDown menu start  */}
          <div className="col-sm-2 part1 d-flex align-items-center">
            <button className="bg-g text-white catTab">
              <BiCategoryAlt size={22} /> Browse All Categories
              <RiArrowDownSLine />
            </button>
          </div>
          {/* DropDown menu end  */}

          {/* Nav menu start  */}
          <div className="col-sm-8 part2 position-static">
            <nav>
              <ul className="list list-inline">
                <li className="list-inline-item">
                  <button className="navTabs">
                    <Link to="/">Home</Link>
                  </button>
                </li>
                <li className="list-inline-item">
                  <button className="navTabs">
                    <Link to="/listing">All Products</Link>
                  </button>
                </li>
                <li className="list-inline-item">
                  <button className="navTabs">
                    <Link>Shop</Link>
                  </button>
                  {/* shop dropdown menu start*/}
                  <div className="dropdown_menu">
                    <ul>
                      <li>
                        <button>
                          <Link to="/listing/clothing">Clothing</Link>
                        </button>
                      </li>
                      <li>
                        <button>
                          <Link to="/listing/electronics">Electronics</Link>
                        </button>
                      </li>
                      <li>
                        <button>
                          <Link to="/listing/beauty">Beauty & wellness</Link>
                        </button>
                      </li>
                      <li>
                        <button>
                          <Link to="/listing/jewellery">Jewellery</Link>
                        </button>
                      </li>
                      <li>
                        <button>
                          <Link to="/listing/kids">Kids</Link>
                        </button>
                      </li>
                      <li>
                        <button>
                          <Link to="/listing/shoes">Shoes</Link>
                        </button>
                      </li>
                      <li>
                        <button>
                          <Link to="/listing/kitchen">Home & Kitchen</Link>
                        </button>
                      </li>
                      <li>
                        <button>
                          <Link to="/listing/bags">Bags</Link>
                        </button>
                      </li>
                    </ul>
                  </div>
                  {/* shop dropdown menu start*/}
                </li>

                {/* Mega menu start*/}

                <li className="list-inline-item position-static">
                  <button className="navTabs">
                    <Link>
                      Categories <RiArrowDownSLine />
                    </Link>
                  </button>
                  {/* dropdown Mega menu start*/}
                  <div className="dropdown_menu megaMenu w-80 mb-2">
                    <div className="row">
                      <div className="col">
                        <h4>Fruit & Vegetables</h4>
                        <ul className="mt-4 mb-0">
                          <li>
                            <Link to="">Fresh Vegetables</Link>
                          </li>
                          <li>
                            <Link to="">Herbs & Seasonings</Link>
                          </li>
                          <li>
                            <Link to="">Cuts & Sprouts</Link>
                          </li>
                          <li>
                            <Link to="">Exotic Fruits & Veggies</Link>
                          </li>
                          <li>
                            <Link to="">Fruits & Vegetables</Link>
                          </li>
                          <li>
                            <Link to="">Packaged Produce</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <h4>Breakfast & Dairy</h4>
                        <ul className="mt-4 mb-0">
                          <li>
                            <Link to="">Fresh Vegetables</Link>
                          </li>
                          <li>
                            <Link to="">Herbs & Seasonings</Link>
                          </li>
                          <li>
                            <Link to="">Cuts & Sprouts</Link>
                          </li>
                          <li>
                            <Link to="">Exotic Fruits & Veggies</Link>
                          </li>
                          <li>
                            <Link to="">Fruits & Vegetables</Link>
                          </li>
                          <li>
                            <Link to="">Packaged Produce</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <h4>Meat & Seafood</h4>
                        <ul className="mt-4 mb-0">
                          <li>
                            <Link to="">Fresh Vegetables</Link>
                          </li>
                          <li>
                            <Link to="">Herbs & Seasonings</Link>
                          </li>
                          <li>
                            <Link to="">Cuts & Sprouts</Link>
                          </li>
                          <li>
                            <Link to="">Exotic Fruits & Veggies</Link>
                          </li>
                          <li>
                            <Link to="">Fruits & Vegetables</Link>
                          </li>
                          <li>
                            <Link to="">Packaged Produce</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <img
                          src="https://api.spicezgold.com/download/file_1734525634299_NewProject(2).jpg"
                          className="w-100"
                        />
                      </div>
                    </div>
                  </div>
                  {/* dropdown Mega menu end*/}
                </li>
                {/* Mega menu end*/}

                <li className="list-inline-item">
                  <button className="navTabs">
                    <Link>Vendors</Link>
                  </button>
                </li>
                <li className="list-inline-item">
                  <button className="navTabs">
                    <Link>
                      Pages <RiArrowDownSLine />
                    </Link>
                  </button>

                  {/* All pages dropdown menu start*/}
                  <div className="dropdown_menu">
                    <ul>
                      <li>
                        <button>
                          <Link to="/about">About Us</Link>
                        </button>
                      </li>
                      <li>
                        <button>
                          <Link to="/contact">Contact</Link>
                        </button>
                      </li>
                      <li>
                        <button>
                          <Link to="/about">My Account</Link>
                        </button>
                      </li>
                      <li>
                        <button>
                          <Link to="/login">Login</Link>
                        </button>
                      </li>
                      <li>
                        <button>
                          <Link to="/register">Register</Link>
                        </button>
                      </li>
                      <li>
                        <button>
                          <Link to="/notfound">Purchase Guide</Link>
                        </button>
                      </li>
                      <li>
                        <button>
                          <Link to="/notfound">Privacy Policy</Link>
                        </button>
                      </li>
                      <li>
                        <button>
                          <Link to="/notfound">Terms of Service</Link>
                        </button>
                      </li>
                    </ul>
                  </div>
                  {/* All pages dropdown menu start*/}
                </li>
                <li className="list-inline-item">
                  <button className="navTabs">
                    <Link>Contact</Link>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          {/* Nav menu end  */}

          <div className="col-sm-2 part3 d-flex align-items-center">
            <div className="phNo d-flex align-items-center ml-auto">
              <span>
                <RiCustomerService2Fill
                  size={40}
                  opacity={0.8}
                  style={{ paddingRight: "2px" }}
                />
              </span>
              <div className="info ml-3">
                <h3 className="text-g mb-0">1900-888</h3>
                <p className="mb-0">&nbsp;24/7 Support Center</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
