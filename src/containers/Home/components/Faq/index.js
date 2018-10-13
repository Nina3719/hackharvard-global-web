import React, { Component } from "react";

import {
  Wrapper,
  Heading,
  QAWrapper,
  Questions,
  Answers,
  Links
} from "./styles.js";

import QA from "./Questions";

class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  render() {
    return (
      <Wrapper width={["95%", "95%", "1000px"]}>
        <Heading fontSize={["2em", "2em", "3em"]}>
          Frequently Asked Questions
        </Heading>
        {Object.entries(QA).map(questions => (
          <QAWrapper>
            <Questions id={questions[0]} fontSize={["1em", "1em", "1.2em"]}>
              {questions[0]}
            </Questions>
            <Answers fontSize={["1em", "1em", "1.2em"]}>{questions[1]}</Answers>
          </QAWrapper>
          //
        ))}
        <Links
          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
          target="_blank"
          fontSize={["1em", "1em", "1.5em"]}
        >
          Major League Hacking Code of Conduct (PDF)
        </Links>
      </Wrapper>
    );
  }
}

export default Faq;
