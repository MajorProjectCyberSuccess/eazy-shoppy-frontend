import { useEffect, useRef, useState } from "react";
import "./header.css";
import axios from "axios";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import Select from "../selectDrop/Select";
import Nav from "./nav/Nav";
import Logo from "./images/EazyShoppy.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const headerRef = useRef(null);

  const countryList = [];

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  });

  const getCountry = async (url) => {
    try {
      await axios.get(url).then((res) => {
        if (res !== null) {
          res.data.data.map((item) => {
            countryList.push(item.country);
            // console.log(item[index].country);
          });
        }
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      if (window.pageYOffset > 200) {
        headerRef.current.classList.add("fixed");
      } else {
        headerRef.current.classList.remove("fixed");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header ref={headerRef}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <img src={Logo} className="logo" />
            </div>

            {/* header search start hear */}
            <div className="col-sm-5">
              <div className="headerSearch d-flex align-items-center">
                <div className="search">
                  <input type="text" placeholder="Search for items..." />
                  <IoIosSearch className="searchIcon cursor position-relative" />
                </div>
              </div>
            </div>
            {/* header search end hear */}

            <div className="col-sm-5 d-flex align-items-center">
              <div className="countryWrapper">
                <Select
                  data={countryList}
                  placeholder={"Your Location"}
                  icon={<MdOutlineLocationOn style={{ opacity: "0.6" }} />}
                />
              </div>
              <div className="ml-auto d-flex align-items-center">
                <ul className="list list-inline mb-0 headerTabs">
                  <li className="list-inline-item">
                    <span>
                      <Link to={"/shop/wishlist"}>
                        <FaRegHeart className="icon" size={21} />
                        <span className="badge rounded-circle">9+</span>
                        Wishlist
                      </Link>
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span>
                      <Link to="/shop/cart">
                        <FiShoppingCart className="icon" size={21} />
                        <span className="badge rounded-circle">3</span>
                        Cart
                      </Link>
                    </span>
                  </li>

                  {/* DropDown for Account start*/}
                  <li className="list-inline-item">
                    <span onClick={() => setIsOpenDropDown(!isOpenDropDown)}>
                      <MdOutlineAccountCircle
                        className="icon profile"
                        size={22}
                      />
                      Account
                    </span>
                    {isOpenDropDown !== false && (
                      <ul className="dropdownmenu">
                        <li>
                          <button className="btn align-items-center">
                            <CiUser />
                            My Account
                          </button>
                        </li>
                        <li>
                          <button className="btn align-items-center">
                            <CiLocationOn /> Order Tracking
                          </button>
                        </li>
                        <li>
                          <button className="btn align-items-center">
                            <CiHeart /> My Wishlist
                          </button>
                        </li>
                        <li>
                          <button className="btn align-items-center">
                            <CiSettings /> Setting
                          </button>
                        </li>
                        <li>
                          <button className="btn align-items-center">
                            <CiLogout /> Sign Out
                          </button>
                        </li>
                      </ul>
                    )}
                    {/* DropDown for Account end*/}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Nav />
    </>
  );
};

export default Header;
