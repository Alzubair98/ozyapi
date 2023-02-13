import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Card = (props) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-6">
          <Carousel fade>
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
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{props.type}</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
