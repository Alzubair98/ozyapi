import React from "react";
import "./services.css";
import Carousel from "react-elastic-carousel";
import carouseldata from "./FCarsouelData";
import ReactPlayer from "react-player";

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
      {/* second chapter */}
      <div className="s-secondcarousel">
        <div className="s-text">
          <hr className="s-firsthr" />
          <span>WATCH WHAT OUR CLIENTS SAY ABOUT US</span>
          <hr className="s-secondhr" />
        </div>

        <Carousel breakPoints={breakPoints}>
          <div className="s-video">
            <ReactPlayer url="https://www.youtube.com/watch?v=eBKcGAhkZUI" />
          </div>
          <div className="s-video">
            <ReactPlayer url="https://www.youtube.com/watch?v=eBKcGAhkZUI" />
          </div>
          <div className="s-video">
            <ReactPlayer url="https://www.youtube.com/watch?v=eBKcGAhkZUI" />
          </div>
          <div className="s-video">
            <ReactPlayer url="https://www.youtube.com/watch?v=eBKcGAhkZUI" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Services;
