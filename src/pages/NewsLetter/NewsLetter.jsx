import "./NewsLetter.css";
import BannerImage from "../../assets/images/bannerximage.png";
import { TbSend } from "react-icons/tb";

const NewsLetter = () => {
  return (
    <section className="subscribe-section">
      <div className="subscribe-container">
        <div className="subscribe-text">
          <h1>Stay home & get your daily needs from our shop</h1>
          <p>Start You`r Daily Shopping with Eazy Shoppy</p>
        </div>
        <form className="subscribe-form">
          <div className="email-input">
            <TbSend size={20} opacity={0.7} />
            <input
              type="email"
              className="m-1 px-1"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <button type="button" className="subscribe-button">
            Subscribe
          </button>
        </form>
        <div className="subscribe-image ">
          <img src={BannerImage} alt="Daily Shopping" />
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
