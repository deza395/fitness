import React from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Service from "./components/Service/Service";
import Gallery from "./components/Gallery/Gallery";
import Question from "./components/Questions/Question";
import Contact from "./components/Contact";

function App() {
  return (
    <Container>
      <Header />
      <Section>
        <Service />
      </Section>
      <Gallery />
      <Question />
      <Contact />
    </Container>
  );
}

export default App;
const Container = styled.div``;
const Section = styled.div`
  margin: 40px 60px 0px 60px;
  @media (max-width: 480px) {
    margin: 10px;
  }
`;
