import React from "react";
import Login from "../auth/Login";
import Rigstration from "../auth/Registration";

const Home = (props) => {
  const handleSuccessfulAuth = (data) => {
    props.handleLogin(data);
  };

  return (
    <>
      <h1> HOME </h1>
      <h1> test {props.user}</h1>
      <Rigstration handleSuccessfulAuth={handleSuccessfulAuth} />
      <Login handleSuccessfulAuth={handleSuccessfulAuth} />
      <button onClick={() => props.handleLogout()}>logout</button>
    </>
  );
};

export default Home;
