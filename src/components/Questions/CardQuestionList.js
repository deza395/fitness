import React from "react";
import CardQuestion from "./CardQuestion";

function CardQuestionList({ question }) {
  return (
    <div className="card-grid-question">
      {question.map((ques) => {
        return <CardQuestion ques={ques} key={ques.id} />;
      })}
    </div>
  );
}

export default CardQuestionList;
