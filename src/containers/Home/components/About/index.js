import React, { Component } from "react";

import { Wrapper, Heading, Text, Img, Body, Move } from "./styles.js";

import John from "./assets/john.svg";

class About extends Component {
  render() {
    return (
      <Wrapper width={["95%", "95%", "1000px"]}>
        <Heading fontSize={["2em", "2em", "3.2em"]}>
          Solve Global Problems ...
          <Move>...compete with the best</Move>
        </Heading>
        <Body flexDirection={["column", "column", "row"]}>
          <Text fontSize="1em">
            In the year 2018, the internet has enabled a globally-connected
            world unlike ever before. Yet in the internet age, even the greatest
            technologies cannot solve local problems in every community. Local
            communities face problems such as education, environmental issues,
            and elderly care where one-size-fits-all solutions are ineffective.
            HackHarvard Global, a group based at Harvard University in
            Cambridge, Massachusetts has partnered with Zhejiang Lab and Alibaba
            Cloud to introduce the HackHarvard Global competition. Participants
            on teams of 2-3 people will be tasked with identifying a problem in
            your local community and proposing a solution to it. Project
            finalists will be reviewed by world-renowned professors at Harvard
            University and receive prize funding and recognition.
          </Text>
          <Img src={John} alt="John" width={["100%", "100%", "50%"]} />
        </Body>
      </Wrapper>
    );
  }
}

export default About;
