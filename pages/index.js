import questions from "../questions";
import { styled } from "../stitches.config";
import Head from "next/head";

const Button = styled("button", {
  padding: "5px",
  margin: "5px",
  cursor: "pointer",
});

const Body = styled("body", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

export default function Home() {
  console.log(questions);

  const questionKeys = Object.keys(questions);
  const questionValues = Object.values(questions);

  const generateRandom = () => {
    const result =
      questionValues[Math.floor(Math.random() * questionValues.length)];
    console.log(result);
  };

  return (
    <div>
      <Head>
        <title>Problem Generator</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Body>
        <h1>Generate a random problem</h1>
        <div>
          {questionKeys.map((n) => (
            <Button key={n} onClick={generateRandom}>
              {n}
            </Button>
          ))}
        </div>
      </Body>
    </div>
  );
}
