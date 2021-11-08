import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="column logo-col">
          <div className="logo-footer">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="column socialsNavigation">
          <ul className="navigation-footer">
            <div className="first">
              <li>
                <Link to="/" className="link-footer">Home</Link>
              </li>
              /
              <li>
                <Link to="/about" className="link-footer">About</Link>
              </li>
              /
              <li>
                <Link to="/products" className="link-footer">Products</Link>
              </li>
            </div>
            <div className="second">
                <li>
                  <Link to="/contact" className="link-footer">Contact</Link>
                </li>
                /
              <li>
                <Link to="/cart" className="link-footer">Cart</Link>
              </li>
            </div>
          </ul>
          <div className="socials">
            <div className="instagram social-elem">
              <i className="fab fa-instagram"></i>
            </div>
            <div className="facebook social-elem">
              <i className="fab fa-facebook"></i>
            </div>
            <div className="twitter social-elem">
              <i className="fab fa-twitter"></i>
            </div>
          </div>
        </div>
        <div className="column contact-footer">
            <h3>Contact Us</h3>
            <div className="contact-group">
                <div className="contact-elem-footer"><i className="fas fa-map-marker-alt"></i> 252 Euclid Avenue, Paso Robles, California</div>
                <div className="contact-elem-footer"><i className="fas fa-phone-square-alt"></i> 0(800) 890-90-609</div>
                <div className="contact-elem-footer"><i className="fas fa-envelope-square"></i> <a href="mailto:anastasiu.tudor@gmail.com">coffeshop@gmail.com</a></div>
            </div>
          
        </div>
      </div>
      <div className="copyRight">
      © 2021 All Rights Reserved Coffee Shop
      </div>
    </div>
  );
};

export default Footer;
