import React, { useState } from "react";
import "../../App.css";
function Card({ flashcard }) {
  const [flip, setFlip] = useState(false);
  return (
    <div
      className={`card ${flip ? "flip" : ""}`}
      onClick={() => setFlip(!flip)}
    >
      <div
        className="front"
        style={{
          backgroundImage: `url(${flashcard.image})`,
        }}
      >
        <div className="title">
          <h2 style={{ backgroundColor: flashcard.color }}>
            {flashcard.title}
          </h2>
        </div>
      </div>
      <div className="back" style={{ backgroundColor: flashcard.color }}>
        <div className="description">
          <h3>{flashcard.titleBack}</h3>
          {flashcard.description.map((option) => {
            return (
              <div className="flashcard-description">
                <ul>
                  <li>{option}</li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
