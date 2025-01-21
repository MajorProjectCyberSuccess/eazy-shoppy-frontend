import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Listing from "./pages/Listing/Listing";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact={true} path="/" element={<Home />} />
          <Route exact={true} path="/listing" element={<Listing />} />
        </Routes>
        <NewsLetter />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
