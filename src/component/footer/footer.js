import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="page-footer footer-style-6 text-light  bg-dark">
      <div className="footer-top">
        <div className="container">
          <div className="row mt-0 myfooter">
            <div className="col-lg col-xl last-mobile myfooter1">
              <div className="footer-block">
                <div className="footer-logo">
                  <a href="/" className="newlogo">
                    OZYAPI
                  </a>
                </div>
                <div className="collapsed-content">
                  <ul>
                    <li>
                      E-mail:{" "}
                      <a href="mailto:Foxshop@gmail.com">OZYAPI@gmail.com</a>
                    </li>
                    <li>
                      PHONE:{" "}
                      <a href="https://api.whatsapp.com/send?phone=+00000000000">
                        +000000000000
                      </a>
                    </li>
                  </ul>
                </div>
                <ul className="social-list">
                  <li>
                    <a href="#" className="icon icon-facebook">
                      <BsFacebook />
                    </a>
                  </li>

                  <li>
                    <a href="#" className="icon icon-twitter">
                      <BsFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon icon-instagram">
                      <BsFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon icon-youtube">
                      <BsFacebook />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-lg col-xl footer-hiden">
              <div className="footer-block collapsed-mobile"></div>
            </div> */}
            {/* <div className="col-lg col-xl footer-hiden">
              <div className="footer-block collapsed-mobile"></div>
            </div> */}
            <div className="col-lg col-xl">
              <div className="footer-block collapsed-mobile">
                <div className="title">
                  <h4>Information</h4>
                  <span className="toggle-arrow">
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <div className="collapsed-content">
                  <ul>
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg col-xl">
              <div className="footer-block collapsed-mobile">
                <div className="title">
                  <h4>WEBSITE NAVIGATION</h4>
                  <span className="toggle-arrow">
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <div className="collapsed-content">
                  <ul>
                    <li>
                      <a href="cart.html">MY FAVORITES</a>
                    </li>
                    <li>
                      <a href="account-wishlist.html">REFRENCES</a>
                    </li>
                    <li>
                      <a href="account-history.html">BLOG</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
