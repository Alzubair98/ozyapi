import React, { useContext, useState } from "react";
import axios from "axios";
import { AppContext } from "../../App";

import "./Dashboard.css";

function Dashboard() {
  const { image, setImage } = useContext(AppContext);

  const handleChange = (event) => {
    event.preventDefault();
    const data = new FormData();

    data.append("house[house_type]", event.target.house_type.value);
    data.append("house[image]", event.target.house_image.files[0]);
    handleSubmit(data);
  };

  const handleSubmit = (data) => {
    axios
      .post("http://127.0.0.1:3001/houses", data, { withCredentials: true })
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
        <br />
        <label htmlFor="house type">image</label>
        <input type="file" name="house_image" required />
        <br />

        <button type="submit"> save house</button>
      </form>
    </div>
  );
}

export default Dashboard;
