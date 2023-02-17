import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { MdBedroomChild } from "react-icons/md";
import { GiBathtub } from "react-icons/gi";
import { BsHouseFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import "./intro.css";

const SearchCard = (props) => {
  return (
    <div key={props.id} className="card mb-3 shadow-lg rounded">
      <div className="row g-0">
        <div className="col-md-5">
          <Carousel fade className="c-c-img">
            {props.images.map((image) => (
              <Carousel.Item>
                <img
                  className="d-block w-100 p-c-img"
                  src={image}
                  alt="First slide"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        {/* inforamtion  */}
        <div className="col-md-7 s-card">
          <div className="card-body">
            <h5 className="card-title">{props.type}</h5>
            <p className="card-text">{props.desc}</p>
            <p className="card-text ">
              <ImLocation className="s-room-image s-location" />
              {props.location}
            </p>
            <div className="s-c-cont">
              <p className="s-c-paragraph">
                <MdBedroomChild className="s-room-image" />
                {props.rooms} Rooms
              </p>

              <p className="s-c-paragraph">
                <GiBathtub className="s-room-image" />
                {props.baths} Bathrooms
              </p>

              <p className="s-c-paragraph">
                <BsHouseFill className="s-room-image" />
                {props.size}m House size
              </p>
            </div>
            <p className="card-text">Refrence Number {props.refrence}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
