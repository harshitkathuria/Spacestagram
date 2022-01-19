import React, { useEffect, useContext } from "react";
import { FaGithub } from "react-icons/fa";
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
        <div className="banner">
          <span>SPACESTAGRAM</span>
          <a
            id="github"
            target={"_blank"}
            href="https://github.com/harshitkathuria/Spacestagram"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <div id="social-links"></div>
      </nav>
      {loading ? <Loader /> : <Grid images={images} />}
    </div>
  );
};

export default Container;
