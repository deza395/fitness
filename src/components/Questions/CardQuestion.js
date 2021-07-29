import React from "react";

function CardQuestion({ ques }) {
  return (
    <div className="container-question">
      <div className="box-img">
        <img className="image-card" src={ques.image}></img>
      </div>
      <div className="below-card">
        <h3 className="question-card">{ques.question}</h3>
        <div className="description-card">{ques.description}</div>
      </div>
    </div>
  );
}

export default CardQuestion;
