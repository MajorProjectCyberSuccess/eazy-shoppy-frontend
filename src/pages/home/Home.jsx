import Banner from "../../components/Banners/Banner";
import CatSlider from "../../components/CatSlider/CatSlider";
import HomeSlider from "./HomeSlider";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <CatSlider />
      <Banner />
    </>
  );
};

export default Home;
