import React, { useEffect, useContext } from "react";
import "./Container.css";
import AppContext from "../../context/AppContext";
import Loader from "../Loader/Loader";
import Grid from "../Grid";

const Container = () => {
  const context = useContext(AppContext);
  const { loading, images, getImages } = context;

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="container">
      <nav className="navbar">
        <div className="banner">SPACESTAGRAM</div>
        <div id="social-links"></div>
      </nav>
      {loading ? <Loader /> : <Grid images={images} />}
    </div>
  );
};

export default Container;
