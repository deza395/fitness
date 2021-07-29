import React from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Service from "./components/Service/Service";
import Question from "./components/Questions/Question";

function App() {
  return (
    <Container>
      <Header />
      <Section>
        <Service />
      </Section>
      <Question />
      <Contact />
    </Container>
  );
}

export default App;
const Container = styled.div``;
const Section = styled.div`
  margin: 40px 60px 0px 60px;
`;
const Nav = styled.div``;
const ActivityList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 80px;
`;
const Activity = styled.div`
  p {
    position: absolute;
    font-size: 26px;
  }
  svg {
    transition: transform 2s;
    position: absolute;
  }

  svg:hover {
    transform: scale(1.5);
  }
`;

const Main = styled.div`
  margin-top: 140px;
  margin-bottom: 60px;
  padding-top: 50px;
  border-radius: 20px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  background: #ededef;
`;
const MainText = styled.div`
  /* text-align: center; */
  h1 {
    text-align: center;
    font-size: 46px;
  }
`;
const MainImage = styled.div``;
const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const Date = styled.div`
  p {
    padding: 60px;
    padding-top: 0;
  }
`;
