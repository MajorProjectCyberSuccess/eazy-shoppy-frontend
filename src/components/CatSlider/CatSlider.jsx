import "./CatSlider.css";
import Slider from "react-slick";
import { useState } from "react";
// import axios from "axios"; // For API calls

const CatSlider = () => {
  //setCategories()
  const [categories] = useState([
    {
      id: 1,
      name: "Cake & Milk",
      imageUrl:
        "https://api.spicezgold.com/download/file_1734525248057_gro.png",
      itemCount: 26,
    },
    {
      id: 2,
      name: "Clothes",
      imageUrl:
        "https://api.spicezgold.com/download/file_1734525239704_foot.png",
      itemCount: 40,
    },
    {
      id: 3,
      name: "Electronics",
      imageUrl:
        "https://api.spicezgold.com/download/file_1734525218436_ele.png",
      itemCount: 15,
    },
    {
      id: 4,
      name: "Cake & Milk",
      imageUrl:
        "https://api.spicezgold.com/download/file_1734525248057_gro.png",
      itemCount: 26,
    },
    {
      id: 5,
      name: "Clothes",
      imageUrl:
        "https://api.spicezgold.com/download/file_1734525239704_foot.png",
      itemCount: 40,
    },
    {
      id: 6,
      name: "Electronics",
      imageUrl:
        "https://api.spicezgold.com/download/file_1734525218436_ele.png",
      itemCount: 15,
    },
    {
      id: 7,
      name: "Cake & Milk",
      imageUrl:
        "https://api.spicezgold.com/download/file_1734525248057_gro.png",
      itemCount: 26,
    },
    {
      id: 8,
      name: "Clothes",
      imageUrl:
        "https://api.spicezgold.com/download/file_1734525239704_foot.png",
      itemCount: 40,
    },
    {
      id: 9,
      name: "Electronics",
      imageUrl:
        "https://api.spicezgold.com/download/file_1734525218436_ele.png",
      itemCount: 15,
    },
    {
      id: 10,
      name: "Clothes",
      imageUrl:
        "https://api.spicezgold.com/download/file_1734525239704_foot.png",
      itemCount: 40,
    },
    {
      id: 11,
      name: "Electronics",
      imageUrl:
        "https://api.spicezgold.com/download/file_1734525218436_ele.png",
      itemCount: 15,
    },
  ]); // State to hold category data

  const [itemBg] = useState([
    // Background color array for each category
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

  // Fetch categories dynamically from API
  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const response = await axios.get("/api/categories"); // Example endpoint
  //       setCategories(response.data); // Set the fetched categories
  //     } catch (error) {
  //       console.error("Error fetching categories:", error);
  //     }
  //   };

  //   fetchCategories();
  // }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth > 768 ? 8 : 2,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="catSliderSection">
      <div className="container-fluid">
        <h2 className="hd mx-2">Featured Categories</h2>
        <Slider {...settings} className="cat_slider_menu">
          {categories.length !== 0 &&
            categories.map((category, index) => {
              return (
                <div className="item" key={index}>
                  <div
                    className="info"
                    style={{ background: itemBg[index % itemBg.length] }}
                  >
                    <img src={category.imageUrl} alt={category.name} />
                    <h5>{category.name}</h5>
                    <p>{category.itemCount} items</p>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    </div>
  );
};

export default CatSlider;
