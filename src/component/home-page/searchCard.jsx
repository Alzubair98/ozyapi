import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { MdBedroomChild } from "react-icons/md";
import { GiBathtub } from "react-icons/gi";
import { BsHouseFill, BsFillKeyFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { FaMoneyBillAlt } from "react-icons/fa";
import "./intro.css";

const SearchCard = (props) => {
  return (
    <div className="card mb-3 rounded shadow-lg" key={props.id}>
      <div className="row g-0">
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

        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{props.type}</h5>
            <p className="card-text">{props.desc}</p>
            <div className="card-cont-cont">
              <div className="card-cont">
                <p className="card-text">
                  <ImLocation className="card-icons" />
                  {props.location}
                </p>
                <p className="card-text">
                  <FaMoneyBillAlt className="card-icons" />
                  Price :${props.price}
                </p>
                <p className="card-text">
                  <BsFillKeyFill className="card-icons" />
                  Ref Number :{props.refrence}
                </p>
              </div>

              <div className="card-cont">
                <p className="card-text">
                  <MdBedroomChild className="card-icons" />
                  {props.rooms} Rooms
                </p>
                <p className="card-text">
                  <GiBathtub className="card-icons" /> {props.baths} Bathrooms
                </p>
                <p className="card-text">
                  <BsHouseFill className="card-icons" /> house size
                  {props.size}m
                </p>
              </div>
            </div>
            <div className="button-cont">
              <button className="btn btn-primary">Contact</button>
              <button className="btn btn-success">Add to wish list</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
