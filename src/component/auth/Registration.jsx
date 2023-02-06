import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Rigstration = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    registrationsErrors: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    axios
      .post(
        "http://127.0.0.1:3001/registrations",
        {
          user: {
            email: user.email,
            password: user.password,
            password_confirmation: user.password_confirmation,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "created") {
          props.handleSuccessfulAuth(response.data);
          navigate("/");
          console.log(response);
        }
      })
      .catch((error) => {
        console.log("registration error", error);
      });
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={user.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password_confirmation"
          placeholder="password confirmation"
          value={user.password_confirmation}
          onChange={handleChange}
          required
        />

        <button type="submit"> Rigister</button>
      </form>
    </div>
  );
};

export default Rigstration;
