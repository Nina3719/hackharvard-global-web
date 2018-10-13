import React, { Component } from "react";

import {
  Wrapper,
  Heading,
  QAWrapper,
  Questions,
  Answers,
  Links,
  OWrapper
} from "./styles.js";

import QA from "./Questions";

class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = index => {
    console.log(this.state);
    if (index in this.state) {
      this.setState({
        [index]: !this.state[index]
      });
    } else {
      this.setState({
        [index]: true
      });
    }
  };

  render() {
    // console.log(this.state);
    return (
      <OWrapper>
        <Wrapper width={["95%", "95%", "1000px"]}>
          <Heading fontSize={["2em", "2em", "3em"]}>
            Frequently Asked Questions
          </Heading>
          {Object.entries(QA).map((questions, i) => (
            <QAWrapper>
              <Questions
                id={i}
                fontSize={["1em", "1em", "1.2em"]}
                onClick={questions => this.handleClick(i)}
              >
                {questions[0]}
              </Questions>
              <Answers
                id={i}
                fontSize={["1em", "1em", "1.2em"]}
                show={this.state[i]}
              >
                {questions[1]}
              </Answers>
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
      </OWrapper>
    );
  }
}

export default Faq;
