import React, { useEffect, useContext } from "react";
import "./Container.css";
import AppContext from "../../context/AppContext";
import Loader from "../Loader/Loader";
import Grid from "../Grid";

const Container = () => {
  const context = useContext(AppContext);
  const { loading, images, getImages, liked, loadLiked } = context;

  useEffect(() => {
    loadLiked();
    getImages();
  }, []);

  useEffect(() => {
    console.log("liked: " + liked);
    if (liked !== null) localStorage.setItem("liked", JSON.stringify(liked));
  }, [liked]);

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
