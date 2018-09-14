import React, { Component } from "react";

import { Wrapper, Heading, Text, Img, Body } from "./styles.js";

import John from "./assets/john.svg";

class About extends Component {
  render() {
    return (
      <Wrapper width={["100%", "100%", "1000px"]}>
        <Heading fontSize={["2em", "2em", "3.5em"]}>
          Solve Global Problems ... <br />
          ...compete with the best
        </Heading>
        <Body flexDirection={["column", "column", "row"]}>
          <Text fontSize={["1.3em", "1.6em", "1.8em"]}>
            HackHarvard Global is a joint initiative by Harvard students of the
            group HackHarvardCollege and partners at Alibaba Cloud Tianchi to
            present a new type of hackathon - a hackathon that allows students
            to make innovative changes locally and globally.
          </Text>
          <Img src={John} alt="John" />
        </Body>
      </Wrapper>
    );
  }
}

export default About;
