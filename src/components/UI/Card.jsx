import React from "react";
import "./CardWrapper.css"; // Import your CSS file for styling

function Card(props) {
  return <div className="card-wrapper">{props.children}</div>;
}

export default Card;
