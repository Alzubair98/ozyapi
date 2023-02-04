import React, { useState } from "react";
import Turky from "../../images/turky.jpg";

import "./intro.css";

const Intro = () => {
  const [selects, setSelects] = useState();
  return (
    <>
      <div className="intro">
        <div className="i-cont">
          <img src={Turky} className="i-bg" />
          <h1 className="i-text">
            PROPERTIES IN TURKEY BUT ONLY THE GOOD ONES
          </h1>
          <form>
            <div class="row g-3 ms-5">
              <div class="col-md-2">
                <select class="form-control">
                  <option>type 1</option>
                  <option>type 2</option>
                  <option>type 3</option>
                </select>
                {/* <input
                  type="text"
                  class="form-control"
                  placeholder="Location"
                  aria-label="First name"
                /> */}
              </div>
              <div class="col-md-2">
                <select class="form-control">
                  <option>type 1</option>
                  <option>type 2</option>
                  <option>type 3</option>
                </select>
                {/* <input
                  type="text"
                  class="form-control"
                  placeholder="Type"
                  aria-label="Last name"
                /> */}
              </div>
              <div class="col-md-2">
                <select class="form-control">
                  <option>1+1 room</option>
                  <option>2+1 room</option>
                  <option>3+1 room</option>
                </select>
                {/* <input
                  type="text"
                  class="form-control"
                  placeholder="Rooms"
                  aria-label="Last name"
                /> */}
              </div>
              <div class="col-md-2">
                <select class="form-control">
                  <option>1+1 room</option>
                  <option>2+1 room</option>
                  <option>3+1 room</option>
                </select>
                {/* <input
                  type="text"
                  class="form-control"
                  placeholder="Price Range"
                  aria-label="Last name"
                /> */}
              </div>
              <div class="col-md-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="or Ref number"
                  aria-label="Last name"
                />
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-primary">
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
