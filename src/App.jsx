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

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact={true} path="/" element={<Home />} />
          <Route exact={true} path="/listing" element={<Listing />} />
          <Route
            exact={true}
            path="/product/details"
            element={<ProductDetail />}
          />
          <Route exact={true} path="/shop/cart" element={<CartPage />} />
          <Route exact={true} path="/notfound" element={<NotFound />} />
        </Routes>
        <NewsLetter />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
