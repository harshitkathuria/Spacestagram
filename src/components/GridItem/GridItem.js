import React from "react";
import { FaRegCopy } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import "./GridItem.css";

const GridItem = ({ image }) => {
  return (
    <div className="card">
      <div className="img-container">
        <img src={image.url} alt={image.title} />
      </div>
      <div className="card_container">
        <div class="details">
          <div id="sub_heading">
            <p className="title">{image.title}</p>
            <p className="date">{image.date}</p>
          </div>
          <p className="about">{image.explanation}</p>
        </div>
        <div id="links">
          <div id="like" className="btn" onClick>
            <span id="icon">
              <AiOutlineLike />
            </span>
            Like
          </div>
          <div id="Copy" className="btn">
            <span id="icon">
              <FaRegCopy /> Copy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
