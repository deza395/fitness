import React, { useState } from "react";
import services from "./ServiceList";
import CardList from "./CardList";

function Service() {
  const [flashcards, setFlashcards] = useState(services);
  return (
    <div className="section-service">
      <h2 className="section-title">Conocé Nuestros Servicios</h2>
      <CardList flashcards={flashcards} />
    </div>
  );
}

export default Service;
