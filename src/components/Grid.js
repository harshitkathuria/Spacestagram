import React from "react";
import GridItem from "./GridItem/GridItem";

const Grid = ({ images }) => {
  return (
    <div style={gridStyle}>
      {images.map((image, index) => {
        return image.media_type === "image" ? (
          <GridItem image={image} key={index} />
        ) : null;
      })}
    </div>
  );
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(275px, 1fr))",
  // gridAutoRows: "minmax(min-content, max-content)",
  gridAutoRows: "min-content",
  gridGap: "15px",
  gridAutoFlow: "dense"
};

export default Grid;
