import React from "react";
import "./componentStyles/card.css";
import photo from "./vinesh.jpeg";
export default function Card() {
  return (
    <div className="card-container">
      <div className="card">
        <div className="uper-section">
          <img src={photo} alt="" className="img" />
        </div>
        <div className="lower-section">
          <h6>UNDERGRUADATE STUDENT</h6>
          <h2>Vinesh Kumar</h2>
          <p>The quick brown fox jumps over the lazy dog.</p>
        </div>
      </div>
    </div>
  );
}
