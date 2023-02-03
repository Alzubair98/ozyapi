import React from "react";
import "./services.css";
import Carousel from "react-elastic-carousel";
import carouseldata from "./FCarsouelData";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Services = () => {
  return (
    <div className="services">
      <div className="s-firstcursul">
        <div className="s-text">
          <hr className="s-firsthr" />
          <span>HOT PROPERTIES FOR SALE IN TURKEY</span>
          <hr className="s-secondhr" />
        </div>

        <Carousel breakPoints={breakPoints}>
          {carouseldata.map((item) => {
            return (
              <div className="c-content">
                <img src={item.image} alt="image" className="c-image" />
                <p>{item.description}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Services;
