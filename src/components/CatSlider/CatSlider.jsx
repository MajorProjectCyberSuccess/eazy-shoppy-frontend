import "./CatSlider.css";
import Slider from "react-slick";
import cat2 from "../../assets/images/cat/cat2.png";
// import cat3 from "../../assets/images/cat/cat3.png";
// import cat4 from "../../assets/images/cat/cat4.png";
// import cat5 from "../../assets/images/cat/cat5.png";
// import cat6 from "../../assets/images/cat/cat6.png";
// import cat7 from "../../assets/images/cat/cat7.png";
// import cat8 from "../../assets/images/cat/cat8.png";
// import cat9 from "../../assets/images/cat/cat9.png";

// import cat11 from "../../assets/images/cat/cat11.png";
// import cat12 from "../../assets/images/cat/cat12.png";
import { useState } from "react";

const CatSlider = () => {
  const [itemBg] = useState([
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3ff",
    "#f2fce4",
    "#ecffec",
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3ff",
    "#f2fce4",
    "#ecffec",
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3ff",
    "#f2fce4",
    "#ecffec",
  ]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <>
      <div className="catSliderSection">
        <div className="container-fluid">
          <h2 className="hd mx-2">Featured Categories</h2>
          <Slider {...settings} className="cat_slider_menu">
            {itemBg.length !== 0 &&
              itemBg.map((item, index) => {
                return (
                  <div className="item" key={index}>
                    <div className="info" style={{ background: item }}>
                      <img src={cat2} alt="cat1" />
                      <h5>Cake & Milk</h5>
                      <p>26 items</p>
                    </div>
                  </div>
                );
              })}

            {/* <div className="item ">
              <img src={cat3} alt="cat1" />
              <h5>Cake & Milk</h5>
              <p>26 items</p>
            </div>
            <div className="item ">
              <img src={cat4} alt="cat1" />
              <h5>Cake & Milk</h5>
              <p>26 items</p>
            </div>
            <div className="item ">
              <img src={cat5} alt="cat1" />
              <h5>Cake & Milk</h5>
              <p>26 items</p>
            </div>
            <div className="item ">
              <img src={cat6} alt="cat1" />
              <h5>Cake & Milk</h5>
              <p>26 items</p>
            </div>
            <div className="item ">
              <img src={cat7} alt="cat1" />
              <h5>Cake & Milk</h5>
              <p>26 items</p>
            </div>
            <div className="item ">
              <img src={cat8} alt="cat1" />
              <h5>Cake & Milk</h5>
              <p>26 items</p>
            </div>
            <div className="item ">
              <img src={cat9} alt="cat1" />
              <h5>Cake & Milk</h5>
              <p>26 items</p>
            </div>
            <div className="item ">
              <img src={cat7} alt="cat1" />
              <h5>Cake & Milk</h5>
              <p>26 items</p>
            </div>
            <div className="item ">
              <img src={cat11} alt="cat1" />
              <h5>Cake & Milk</h5>
              <p>26 items</p>
            </div>
            <div className="item ">
              <img src={cat12} alt="cat1" />
              <h5>Cake & Milk</h5>
              <p>26 items</p>
            </div>
            <div className="item ">
              <img src={cat2} alt="cat1" />
              <h5>Cake & Milk</h5>
              <p>26 items</p>
            </div>
            <div className="item ">
              <img src={cat5} alt="cat1" />
              <h5>Cake & Milk</h5>
              <p>26 items</p>
            </div>
            <div className="item ">
              <img src={cat12} alt="cat1" />
              <h5>Cake & Milk</h5>
              <p>26 items</p>
            </div> */}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CatSlider;
