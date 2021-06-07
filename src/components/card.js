import React from "react";
import "./componentStyles/card.css";
export default function Card(props) {
  return (
    <div style={{width: `${props.containerWidth}`}} className="card-container">
      <div style={{width: `${props.width}`, float:`${props.pos}`}}  className="card">
        <div className="uper-section">
          <img src={props.photo} alt="" className="img" />
        </div>
        <div className="lower-section">
          <h6>{props.subtitle}</h6>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
