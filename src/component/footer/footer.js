import React from "react";
import "./footer.css";
import { FaBeer } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="sticky-footer" className="py-4 bg-dark text-white">
      <div className="container text-center">
        <small>Copyright </small>
        <FaBeer />
      </div>
    </div>
  );
};

export default Footer;
