import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { MdBedroomChild } from "react-icons/md";
import { GiBathtub } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import "./preferencess.css";

const Card = (props) => {
  return (
    <div key={props.id} className="card mb-3">
      <div className="row g-0">
        <div className="col-md-5">
          <Carousel fade className="c-c-img">
            {props.images.map((image) =>
              image.map((single) => (
                <Carousel.Item>
                  <img
                    className="d-block w-100 p-c-img"
                    src={single}
                    alt="First slide"
                  />
                </Carousel.Item>
              ))
            )}
          </Carousel>
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title">{props.type}</h5>
            <p className="card-text">{props.desc}</p>
            <p className="card-text">{props.location}</p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
          <div className="c-room">
            <MdBedroomChild className="c-room-image" />
            <p>{props.rooms}</p>
          </div>

          <div className="c-room">
            <GiBathtub className="c-room-image" />
            <p>{props.baths}</p>
          </div>

          <button
            className="btn btn-success"
            type="button"
            onClick={props.handelid}
          >
            <NavLink className="details-link" id={props.id} to="/details">
              Details
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
