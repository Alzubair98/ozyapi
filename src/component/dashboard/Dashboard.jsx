import React, { useState } from "react";
import axios from "axios";

import "./Dashboard.css";

function Dashboard() {
  const handleChange = (event) => {
    event.preventDefault();
    const data = new FormData();
    const files = event.target.house_images.files.length;

    data.append("house[house_type]", event.target.house_type.value);
    // data.append("house[image]", event.target.house_image.files[0]); # upload one image
    for (let i = 0; i < files; i++) {
      data.append("house[images]", event.target.house_images.files[i]);
    }
    handleSubmit(data);
  };

  const handleSubmit = (data) => {
    axios
      .post(
        "http://127.0.0.1:3001/houses",
        data,
        { withCredentials: true },
        { headers: { "Content-type": "multipart/form-data" } }
      )
      .then((response) => {
        if (response) {
          console.log("house status", response);
          // setImage(data.image_url)
        }
      })
      .catch((error) => {
        console.log("house error", error);
      });
  };

  const getItems = () => {
    axios
      .get("http://127.0.0.1:3001/houses")
      .then((response) => console.log(response.data));
  };

  return (
    <div>
      <form onSubmit={(e) => handleChange(e)}>
        <label htmlFor="house type">house type</label>
        <input
          type="text"
          name="house_type"
          placeholder="house type"
          required
        />
        {/* <br />
        <label htmlFor="house type">image</label>
        <input type="file" name="house_image" required /> */}
        <br />
        <label htmlFor="house type">images</label>
        <input type="file" multiple name="house_images" required />
        <br />
        <button type="submit">save house</button>
        <br />
        <button type="button" onClick={getItems}>
          {" "}
          show
        </button>
      </form>
    </div>
  );
}

export default Dashboard;
