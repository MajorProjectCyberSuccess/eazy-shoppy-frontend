import SideBarFilter from "../../components/SideBarFilter/SideBarFilter";
import "./Listing.css";
// import { Link } from "react-router-dom";

// import { useParams } from "react-router-dom";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Banner1 from "./images/b1.jpg";
import Banner2 from "./images/b2.jpg";
import Product from "../../components/Product/Product";

const Listing = () => {
  // const { id } = useParams();
  // const [category, setCategory] = useState(null);
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchCategoryAndProducts = async () => {
  //     try {
  //       // Fetch category details by ID
  //       const categoryResponse = await axios.get(`http://localhost:8000/api/category/getCategoryById`, {
  //         headers: {
  //           id: id, // Pass the category ID in the request header
  //         },
  //       });

  //       const categoryData = categoryResponse.data.data; // Assuming the API returns the category in the `data` field
  //       setCategory(categoryData);

  //       // Fetch products for the category
  //       const productsResponse = await axios.get(`http://localhost:8000/api/products/category/${id}`);
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
    { name: "food", path: `/shop/food` },
  ];

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
                We found <span className="text-success">{products.length}</span>{" "}
                item for you!
              </p>
            </div>

            <div className="products-container">
              {products.map((product) => (
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
