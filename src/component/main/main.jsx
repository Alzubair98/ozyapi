import React from "react";
import Intro from "../home-page/intro";
import Navbar from "../navbar/navbar";
import Article from "../articles/article";
import Blog from "../blog/blog";
import Footer from "../footer/footer";
import Services from "../services/services";

const Main = (props) => {
  return (
    <>
      <Navbar user={props.user} />
      <Intro />
      <Services />
      <Article />
      <Blog />
      <Footer />
    </>
  );
};

export default Main;
