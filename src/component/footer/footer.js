import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer class="page-footer footer-style-6 text-light  bg-dark">
      <div class="footer-top">
        <div class="container">
          <div class="row mt-0 myfooter">
            <div class="col-lg col-xl last-mobile myfooter1">
              <div class="footer-block">
                <div class="footer-logo">
                  <a href="/" class="newlogo">
                    OZYAPI
                  </a>
                </div>
                <div class="collapsed-content">
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
                <ul class="social-list">
                  <li>
                    <a href="#" class="icon icon-facebook"></a>
                  </li>

                  <li>
                    <a href="#" class="icon icon-twitter"></a>
                  </li>
                  <li>
                    <a href="#" class="icon icon-instagram"></a>
                  </li>
                  <li>
                    <a href="#" class="icon icon-youtube"></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg col-xl footer-hiden">
              <div class="footer-block collapsed-mobile"></div>
            </div>
            <div class="col-lg col-xl footer-hiden">
              <div class="footer-block collapsed-mobile"></div>
            </div>
            <div class="col-lg col-xl">
              <div class="footer-block collapsed-mobile">
                <div class="title">
                  <h4>Information</h4>
                  <span class="toggle-arrow">
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <div class="collapsed-content">
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
            <div class="col-lg col-xl">
              <div class="footer-block collapsed-mobile">
                <div class="title">
                  <h4>WEBSITE NAVIGATION</h4>
                  <span class="toggle-arrow">
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <div class="collapsed-content">
                  <ul>
                    <li>
                      <a href="account-details.html">LOCATIONS</a>
                    </li>
                    <li>
                      <a href="cart.html">MY FAVORITES</a>
                    </li>
                    <li>
                      <a href="account-wishlist.html">REFRENCES</a>
                    </li>
                    <li>
                      <a href="account-history.html">BLOG</a>
                    </li>
                    <li>
                      <a href="account-history.html">RECENTLY SOLD</a>
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
