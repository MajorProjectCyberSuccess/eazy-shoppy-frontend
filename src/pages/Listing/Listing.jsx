import "./Listing.css";
import { useState } from "react";

// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Product from "../../components/Product/Product";
import SideBarFilter from "../../components/SideBarFilter/SideBarFilter";

import Banner1 from "./images/b1.jpg";
import Banner2 from "./images/b2.jpg";

const Listing = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category.name);
  };

  // const { id } = useParams();
  // const [category, setCategory] = useState(null);
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchCategoryAndProducts = async () => {
  //     try {
  //       // Fetch category details by ID
  //       const categoryResponse = await axios.get(
  //         `http://localhost:8000/api/category/getCategoryById`,
  //         {
  //           headers: {
  //             id: id, // Pass the category ID in the request header
  //           },
  //         }
  //       );

  //       const categoryData = categoryResponse.data.data; // Assuming the API returns the category in the `data` field
  //       setCategory(categoryData);

  //       // Fetch products for the category
  //       const productsResponse = await axios.get(
  //         `http://localhost:8000/api/products/category/${id}`
  //       );
  //       setProducts(productsResponse.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchCategoryAndProducts();
  // }, [id]);

  // if (!category) {
  //   return <div>Loading...</div>;
  // }

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/shop" },
    { name: selectedCategory, path: `/shop/${selectedCategory}` },
  ];

  const products = [
    {
      productId: 1,
      image:
        "https://www.jiomart.com/images/product/original/490617278/haldiram-s-mini-bhakharwadi-200-g-product-images-o490617278-p490617278-0-202307131827.jpg?im=Resize=(360,360)",
      categoryName: "Snacks",
      name: "Haldirams Namkeen - Aloo Bhujia, 200G",
      ratings: 4.5,
      brand: "EazyShoppy",
      discountedPrice: 2.5,
      originalPrice: 3,
      tag: "best",
      productLink: "/shop/product/details/1",
    },
    {
      productId: 2,
      image:
        "https://www.jiomart.com/images/product/original/rviklciklo/jagdish-farshan-bhakharwadi-250-gm-pack-of-2-product-images-orviklciklo-p603850635-0-202308130006.jpg?im=Resize=(360,360)",
      categoryName: "Snacks",
      name: "Jagdish Bhakarwadi - 250 gm",
      ratings: 4,
      brand: "EazyShoppy",
      discountedPrice: 3.2,
      originalPrice: 4,
      tag: "new",
      productLink: "/shop/product/details/2",
    },
    {
      productId: 3,
      image:
        "https://www.jiomart.com/images/product/original/491696357/lay-s-spanish-tomato-tango-potato-chips-82-g-product-images-o491696357-p590121910-0-202410031824.jpg?im=Resize=(360,360)",
      categoryName: "Snacks",
      name: "Lay's Potato Chips - Classic Salted, 52G",
      ratings: 4.1,
      brand: "EazyShoppy",
      discountedPrice: 1.2,
      originalPrice: 1.5,
      tag: "popular",
      productLink: "/shop/product/details/10",
    },
    {
      productId: 4,
      image:
        "https://www.jiomart.com/images/product/original/492488606/sunfeast-dark-fantasy-choco-fills-562-5g-product-images-o492488606-p590838661-0-202410251300.jpg?im=Resize=(360,360)",
      categoryName: "Biscuits",
      name: "Sunfeast Dark Fantasy - Choco Fills, 75G",
      ratings: 3,
      brand: "EazyShoppy",
      discountedPrice: 1.5,
      originalPrice: 2,
      tag: "new",
      productLink: "/shop/product/details/4",
    },
    {
      productId: 5,
      image:
        "https://www.jiomart.com/images/product/original/491695463/britannia-good-day-cashew-biscuits-1-kg-product-images-o491695463-p590116903-0-202308241215.jpg?im=Resize=(360,360)",
      categoryName: "Biscuits",
      name: "Britannia Good Day - Cashew Biscuits, 200G",
      ratings: 2.5,
      brand: "EazyShoppy",
      discountedPrice: 1.8,
      originalPrice: 2.5,
      tag: "best",
      productLink: "/shop/product/details/5",
    },
    {
      productId: 6,
      image:
        "https://www.jiomart.com/images/product/original/490000827/kissan-mixed-fruit-jam-200-g-product-images-o490000827-p490000827-0-202305311354.jpg?im=Resize=(360,360)",
      categoryName: "Spreads",
      name: "Kissan Mixed Fruit Jam - 200G",
      ratings: 4.4,
      brand: "EazyShoppy",
      discountedPrice: 3.5,
      originalPrice: 4.2,
      tag: "popular",
      productLink: "/shop/product/details/6",
    },
    {
      productId: 7,
      image:
        "https://www.jiomart.com/images/product/original/490064731/nutella-ferrero-hazelnut-spread-with-cocoa-350-g-product-images-o490064731-p490064731-0-202211211354.jpg?im=Resize=(360,360)",
      categoryName: "Spreads",
      name: "Nutella - Hazelnut Spread with Cocoa, 350G",
      ratings: 4.8,
      brand: "EazyShoppy",
      discountedPrice: 5.5,
      originalPrice: 6,
      tag: "best",
      productLink: "/shop/product/details/7",
    },
    {
      productId: 8,
      image:
        "https://www.jiomart.com/images/product/original/491168210/amul-pasteurised-butter-200-g-tub-product-images-o491168210-p491168210-0-202203152232.jpg?im=Resize=(360,360)",
      categoryName: "Dairy",
      name: "Amul special kjdsnfjdskjfnnkjnkj Butter - Salted, 200G",
      ratings: 4.9,
      brand: "EazyShoppy",
      discountedPrice: 2.6,
      originalPrice: 3.2,
      tag: "new",
      productLink: "/shop/product/details/8",
    },
    {
      productId: 9,
      image:
        "https://www.jiomart.com/images/product/original/490008739/parle-g-original-glucose-biscuits-800-g-product-images-o490008739-p490008739-0-202203170454.jpg?im=Resize=(360,360)",
      categoryName: "Biscuits",
      name: "Parle-G Original Glucose Biscuit - 800G",
      ratings: 4.6,
      brand: "EazyShoppy",
      discountedPrice: 4.0,
      originalPrice: 4.5,
      tag: "best",
      productLink: "/shop/product/details/9",
    },
    {
      productId: 10,
      image:
        "https://www.jiomart.com/images/product/original/491187258/good-life-moong-dal-500-g-product-images-o491187258-p491187258-0-202203152121.jpg?im=Resize=(360,360)",
      categoryName: "Snacks",
      name: "Haldirams Namkeen - Masala Moong Dal, 200G",
      ratings: 2,
      brand: "EazyShoppy",
      discountedPrice: 2.8,
      originalPrice: 3.5,
      tag: "popular",
      productLink: "/shop/product/details/3",
    },
  ];

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.categoryName === selectedCategory)
    : products;

  return (
    <section className="allListingPage">
      <div className="container-fluid">
        {/* Breadcrumb Section */}
        <div className="breadcrumbWrap">
          <h1>{selectedCategory}</h1>
          <Breadcrumb breadcrumbItems={breadcrumbItems} />
        </div>

        {/* Main Content */}
        <div className="listingData">
          {/* Sidebar */}
          <div className="col-md-3 sideBarWrapper">
            <div className="card">
              <SideBarFilter onCategorySelect={handleCategorySelect} />
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
                We found{" "}
                <span className="text-success">{filteredProducts.length}</span>{" "}
                item for you!
              </p>
            </div>

            <div className="products-container">
              {filteredProducts.map((product) => (
                <div className="item" key={product.id}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listing;
