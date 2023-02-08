import React, { useState } from "react";
import axios from "axios";

import "./Dashboard.css";

function Dashboard() {
  const [house, setHouse] = useState({
    house_type: "",
    postingErrors: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setHouse((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    axios
      .post(
        "http://127.0.0.1:3001/houses",
        {
          house: {
            house_type: house.house_type,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response) {
          console.log("house status", response);
        }
      })
      .catch((error) => {
        console.log("house error", error);
      });
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="house_type"
          placeholder="house type"
          value={house.house_type}
          onChange={handleChange}
          required
        />

        <button type="submit"> save house</button>
      </form>
    </div>
  );
}

export default Dashboard;
