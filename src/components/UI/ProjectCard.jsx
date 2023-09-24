import React from "react";
import "./ProjectCard.css"; // Import your CSS file for styling

function Card(props) {
  return <div className="project-card-wrapper">{props.children}</div>;
}

export default Card;
