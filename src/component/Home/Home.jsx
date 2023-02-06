import React from "react";
import Rigstration from "../auth/Registration";

const Home = (props) => {
  const handleSuccessfulAuth = (data) => {
    props.handleLogin(data);
  };

  return (
    <>
      <h1> HOME</h1>
      <Rigstration handleSuccessfulAuth={handleSuccessfulAuth} />
    </>
  );
};

export default Home;
