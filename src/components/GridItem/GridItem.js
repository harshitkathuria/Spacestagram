import React, { useContext, useState } from "react";
import { FaRegCopy, FaCopy } from "react-icons/fa";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import "./GridItem.css";
import AppContext from "../../context/AppContext";

const GridItem = ({ image }) => {
  const { likeImage, unlikeImage, liked } = useContext(AppContext);
  const [copy, setCopy] = useState(false);

  const handleLike = () => {
    if (liked.includes(image.title)) {
      unlikeImage(image.title);
    } else {
      likeImage(image.title);
    }
  };

  const handleCopy = () => {
    console.log(image.url);
    navigator.clipboard.writeText(image.url);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };

  return (
    <div className="card">
      <div className="img-container">
        <img src={image.url} alt={image.title} />
      </div>
      <div className="card_container">
        <div className="details">
          <div id="sub_heading">
            <p className="title">{image.title}</p>
            <p className="date">{image.date}</p>
          </div>
          <p className="about">{image.explanation}</p>
        </div>
        <div id="links">
          <div id="like" className="btn" onClick={handleLike}>
            <span className="icon">
              {liked.includes(image.title) ? <AiFillLike /> : <AiOutlineLike />}
            </span>
            Like
          </div>
          <div id="copy" className="btn" onClick={handleCopy}>
            <span className="icon">{copy ? <FaCopy /> : <FaRegCopy />}</span>
            Copy
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
