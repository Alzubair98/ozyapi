import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./whatapp.css";

const WhatsApp = () => {
  const handleClick = () => {
    const message = encodeURIComponent("Hello, how can i assist you?");
    window.open(`https://wa.me/+905359431896?text=${message}`, "_blank");
  };

  return (
    <div className="whatapp-icon" onClick={handleClick}>
      {" "}
      <FaWhatsapp
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          color: "#25d366",
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      />{" "}
    </div>
  );
};

export default WhatsApp;
