import "./Listing.css";
import { useState } from "react";
import { useProductContext } from "../../utility/ProductContext"; // Import the context
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Product from "../../components/Product/Product";
import SideBarFilter from "../../components/SideBarFilter/SideBarFilter";

import Banner1 from "./images/b1.jpg";
import Banner2 from "./images/b2.jpg";

const Listing = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const {
    products,
    fetchProductsByCategoryId,
    fetchAllProducts,
    loading,
    error,
  } = useProductContext(); // Access context functions and state

  // Handle category selection
  const handleCategorySelect = async (category) => {
    setSelectedCategory(category.name);
    if (category.id) {
      await fetchProductsByCategoryId(category.id); // Fetch products by category ID
    } else {
      // If "All Products" is selected, fetch all products
      fetchAllProducts();
    }
  };

  // Breadcrumb items
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/shop" },
    {
      name: selectedCategory || `All Products`,
      path: `/shop/${selectedCategory || ""}`,
    },
  ];

  // Filter products based on the selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.categoryName === selectedCategory)
    : products;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="allListingPage">
      <div className="container-fluid">
        {/* Breadcrumb Section */}
        <div className="breadcrumbWrap">
          <h1>{selectedCategory || "Products"}</h1>
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
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div className="item" key={product.productId}>
                    <Product product={product} />
                  </div>
                ))
              ) : (
                <p>No products found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listing;
