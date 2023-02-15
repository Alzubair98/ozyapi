import React, { useState } from "react";
import Turky from "../../images/turky.jpg";

import "./intro.css";

const Intro = () => {
  const [selects, setSelects] = useState();

  const printValue = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <div className="intro">
        <div className="i-cont">
          <img src={Turky} className="i-bg" />
          <h1 className="i-text">
            PROPERTIES IN TURKEY BUT ONLY THE GOOD ONES
          </h1>
          <form>
            <div className="row g-3 ms-5">
              <div className="col-md-2">
                <select
                  className="form-control"
                  value={selects}
                  onChange={printValue}
                >
                  {/* <option>Location</option> */}
                  <option>type 1</option>
                  <option>type 2</option>
                  <option>type 3</option>
                </select>
              </div>
              <div className="col-md-2">
                <select className="form-control">
                  <option>type 1</option>
                  <option>type 2</option>
                  <option>type 3</option>
                </select>
              </div>
              <div className="col-md-2">
                <select className="form-control">
                  <option>1+1 room</option>
                  <option>2+1 room</option>
                  <option>3+1 room</option>
                </select>
              </div>
              <div className="col-md-2">
                <select className="form-control">
                  <option>1+1 room</option>
                  <option>2+1 room</option>
                  <option>3+1 room</option>
                </select>
              </div>
              <div className="col-md-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="or Ref number"
                  aria-label="Last name"
                />
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Intro;
