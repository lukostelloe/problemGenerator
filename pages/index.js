import questions from "../questions";
import { styled } from "../stitches.config";
import Head from "next/head";
import { useState } from "react";

const Button = styled("button", {
  padding: "5px",
  margin: "5px",
  cursor: "pointer",
});

const FlexDiv = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

export default function Home() {
  const questionKeys = Object.keys(questions);
  const questionValues = Object.values(questions);

  const easyQuestions = Object.values(questions.easy);
  const mediumQuestions = Object.values(questions.medium);
  const hardQuestions = Object.values(questions.hard);

  const [randomQuestion, setRandomQuestion] = useState();

  const generateRandom = () => {
    const result =
      questionValues[Math.floor(Math.random() * questionValues.length)];
    console.log(result);
  };

  const generateQuestion = (e) => {
    if (e.target.value === "Easy") {
      const result =
        easyQuestions[Math.floor(Math.random() * questionValues.length)];
      setRandomQuestion(result);
    } else if (e.target.value === "Medium") {
      const result =
        mediumQuestions[Math.floor(Math.random() * questionValues.length)];
      setRandomQuestion(result);
    } else if (e.target.value === "Hard") {
      const result =
        hardQuestions[Math.floor(Math.random() * questionValues.length)];
      setRandomQuestion(result);
    }
  };

  return (
    <div>
      <Head>
        <title>Problem Generator</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <FlexDiv>
        <h1>Generate a random problem</h1>
        <div>
          <Button value={"Easy"} onClick={generateQuestion}>
            Easy
          </Button>
          <Button value={"Medium"} onClick={generateQuestion}>
            Medium
          </Button>
          <Button value={"Hard"} onClick={generateQuestion}>
            Hard
          </Button>
        </div>
        <h1>{randomQuestion}</h1>
      </FlexDiv>
    </div>
  );
}
