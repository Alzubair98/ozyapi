import React from "react";
import "./preferencess.css";
import Navbar from "../navbar/navbar";
import Carousel from "react-bootstrap/Carousel";

const Preferencess = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="p-fullPage row">
        <div className="p-firstPart col-4">
          <h1>why</h1>
        </div>
        <div className="p-secondPart col-md-8">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-6">
                <Carousel fade>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 p-c-img"
                      src="/img1.jpg"
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 p-c-img"
                      src="/img4.webp"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 p-c-img"
                      src="/img6.webp"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preferencess;
