import React, { useState } from "react";
import questions from "./questionList";
import CardQuestionList from "./CardQuestionList";

function Question() {
  const [question, setQuestions] = useState(questions);

  return (
    <div className="section-question">
      <h2 className="setction-title">Preguntas Frecuentes</h2>
      <CardQuestionList question={question} />;
    </div>
  );
}

export default Question;
