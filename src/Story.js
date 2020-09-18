import React from "react";
import "./Story.css";
import { Avatar } from "@material-ui/core";

function Story({ image, profilSrc, title }) {
  return (
    <div
      className="story"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <Avatar src={profilSrc} className="story__avatar" />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
