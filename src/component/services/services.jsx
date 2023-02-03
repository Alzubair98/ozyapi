import React from "react";
import "./services.css";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import Carousel from "react-elastic-carousel";

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
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img1} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Services;
