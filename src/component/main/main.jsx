import React from "react";
import Intro from "../home-page/intro";
import Article from "../articles/article";
import Blog from "../blog/blog";
import Footer from "../footer/footer";
import Services from "../services/services";

const Main = (props) => {
  const handleSuccessSearch = (data) => {
    props.onSearch(data);
  };
  return (
    <>
      <Intro handleSuccessSearch={handleSuccessSearch} />
      <Services />
      <Article />
      <Blog />
      <Footer />
    </>
  );
};

export default Main;
