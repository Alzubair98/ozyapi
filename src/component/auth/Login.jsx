import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    loginErrors: "",
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
        "http://127.0.0.1:3001/sessions",
        {
          user: {
            email: user.email,
            password: user.password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.logged_in) {
          props.handleSuccessfulAuth(response.data);
          navigate("/");
          console.log("logged in", response);
        }
      })
      .catch((error) => {
        console.log("login error", error);
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

        <button type="submit"> Log in</button>
      </form>
    </div>
  );
};

export default Login;
