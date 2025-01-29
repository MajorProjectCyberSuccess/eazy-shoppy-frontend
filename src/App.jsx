import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Listing from "./pages/Listing/Listing";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Footer from "./components/footer/Footer";
import NotFound from "./pages/NotFound/NotFound";
import ProductDetail from "./pages/ProductDetails/ProductDetail";
import CartPage from "./pages/AddCartPage/CartPage";
import { CartProvider } from "./utility/CartContext";
import { CategoryProvider } from "./utility/CategoryContext";
import About from "./pages/about/About";
import MyList from "./pages/MyList/MyList";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import CheckOut from "./pages/Checkout/CheckOut";

function App() {
  // const apiUrl = import.meta.env.VITE_API_URL;
  // console.log(apiUrl);

  return (
    <CartProvider>
      <CategoryProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact={true} path="/" element={<Home />} />
            <Route exact={true} path="/shop/:id" element={<Listing />} />
            <Route
              exact={true}
              path="/shop/product/details/:id"
              element={<ProductDetail />}
            />
            <Route exact={true} path="/shop/cart" element={<CartPage />} />
            <Route exact={true} path="/signup" element={<SignUp />} />
            <Route exact={true} path="/login" element={<SignIn />} />
            <Route exact={true} path="/shop/wishlist" element={<MyList />} />
            <Route
              exact={true}
              path="/shop/cart/checkout"
              element={<CheckOut />}
            />
            <Route exact={true} path="/about/eazy-shoppy" element={<About />} />
            <Route exact={true} path="/notfound" element={<NotFound />} />
          </Routes>
          <NewsLetter />
          <Footer />
        </BrowserRouter>
      </CategoryProvider>
    </CartProvider>
  );
}

export default App;
