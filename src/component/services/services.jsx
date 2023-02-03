import React from "react";
import "./services.css";
import "swiper/css";
import "swiper/css/free-mode";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

const Services = () => {
  return (
    <div className="services">
      <div className="s-firstcursul">
        <div className="s-text">
          <hr className="s-firsthr" />
          <span>HOT PROPERTIES FOR SALE IN TURKEY</span>
          <hr className="s-secondhr" />
        </div>
        <Swiper
          freeMode={true}
          modules={[FreeMode]}
          grabCursor={true}
          className="portfolio-slider"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
        >
          <SwiperSlide>
            <div className="s-img">
              <img src={img1} alt="yosuf" className="s-img" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img src={img2} alt="yosuf" className="s-img" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={img3} alt="yosuf" className="s-img" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={img1} alt="yosuf" className="s-img" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={img2} alt="yosuf" className="s-img" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
