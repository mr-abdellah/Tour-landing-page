import "./Footer.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

//social media icons
import {
  RiTwitterFill,
  RiFacebookCircleFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiYoutubeFill,
} from "react-icons/ri";

//

const Footer = () => {
  return (
    <footer>
      <div className="footer_wrapper">
        <div className="footer_div1">
          <img src={logo} alt="logo" />
          <p>
            Plan and book your perfect trip with expert advice, travel tips
            destination information from us
          </p>
          <p>©2020 Thousand Sunny. All rights reserved</p>
        </div>

        <div className="footer_div2">
          <h3>Destinations</h3>
          <Link to="/">- Africa</Link>
          <Link to="/">- Antarctica</Link>
          <Link to="/">- Asia</Link>
          <Link to="/">- Europe</Link>
          <Link to="/">- America</Link>
        </div>
        <div className="footer_div3">
          <h3>Shop</h3>
          <Link to="/">- Destination Guides</Link>
          <Link to="/">- Pictorial & Gifts</Link>
          <Link to="/">- Special Offers</Link>
          <Link to="/">- Delivery Times</Link>
          <Link to="/">- FAQs</Link>
        </div>
        <div className="footer_div4">
          <h3>Interests</h3>
          <Link to="/">- Adventure Travel</Link>
          <Link to="/">- Art And Culture</Link>
          <Link to="/">- Wildlife And Nature</Link>
          <Link to="/">- Family Holidays</Link>
          <Link to="/">- Food And Drink</Link>
        </div>

        <div className="social_media">
          <a href="">
            <RiTwitterFill />
          </a>
          <a href="/">
            <RiFacebookCircleFill />
          </a>
          <a href="/">
            <RiInstagramLine />
          </a>
          <a href="/">
            <RiLinkedinFill />
          </a>
          <a href="/">
            <RiYoutubeFill />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
