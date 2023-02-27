import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { MdBedroomChild } from "react-icons/md";
import { GiBathtub } from "react-icons/gi";
import { BsHouseFill, BsFillKeyFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { FaMoneyBillAlt } from "react-icons/fa";
import "./preferencess.css";

const Card = (props) => {
  const [disable, setDisable] = useState(false);

  const SaveToSession = (item) => {
    const sessionRecords =
      JSON.parse(sessionStorage.getItem("user_like")) || [];

    sessionRecords.push(item);
    sessionStorage.setItem("user_like", JSON.stringify(sessionRecords));
    setDisable(true);
  };
  return (
    <div key={props.id}>
      <div className="card s-card rounded shadow-lg">
        <div className="Carousel">
          <Carousel fade className="C-C-Carousel">
            {props.images.map((image) => (
              <Carousel.Item className="C-C-item">
                <img
                  className="C-C-image d-block"
                  src={image}
                  alt="First slide"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="body">
          <div>
            <h2> {props.type}</h2>
            <h3>{props.desc}</h3>
          </div>
          <div className="d-c-cont">
            <p>
              <ImLocation className="d-c-icon" /> {props.location}
            </p>
            <p>
              <MdBedroomChild className="d-c-icon" /> {props.rooms}
            </p>
            <p>
              <GiBathtub className="d-c-icon" /> {props.baths}
            </p>
          </div>
          <div className="d-c-cont">
            <p>
              <FaMoneyBillAlt className="d-c-icon" /> {props.price}$
            </p>
            <p>
              <BsHouseFill className="d-c-icon" /> {props.size}
            </p>
            <p>
              <BsFillKeyFill className="d-c-icon" /> {props.refrence}
            </p>
          </div>
          <div className="button-cont">
            <button
              disabled={disable}
              className="btn btn-success"
              onClick={() => SaveToSession(props.item)}
            >
              {disable ? "Added to Wishlist" : "add to wishlist"}
            </button>
            {/* <button
              className="btn btn-success"
              type="button"
              onClick={props.handelid}
            >
              <NavLink className="details-link" id={props.id} to="/details">
                Details
              </NavLink>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
