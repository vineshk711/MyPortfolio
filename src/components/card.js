import React from "react";
import "./componentStyles/card.css";
export default function Card({subtitle,title,description,photo}) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="uper-section">
          <img src={photo} alt="" className="img" />
        </div>
        <div className="lower-section">
          <h6>{subtitle}</h6>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
