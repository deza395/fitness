import React, { useState } from "react";
import services from "./ServiceList";
import CardList from "./CardList";

function Service() {
  const [flashcards, setFlashcards] = useState(services);
  return <CardList flashcards={flashcards} />;
}

export default Service;
