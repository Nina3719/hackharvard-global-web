import React, { Component } from "react";
import Themes from "../Themes";
import { Flex } from "grid-styled";

import {
  Wrapper,
  Left,
  Right,
  Points,
  Text,
  Section,
  OWrapper
} from "./styles.js";

class Intro extends Component {
  render() {
    return (
      <OWrapper>
        <Wrapper width={["100%", "100%", "1000px"]}>
          <Section flexDirection={["column-reverse", "row", "row"]}>
            <Left width={["85%", "50%", "50%"]} background={true} ml="10px">
              <Text> Mission of the Hackathon </Text>
              <Points mb="15px">
                HackHarvard Global seeks to encourage technological innovation
                to promote the common good and develop citizens of the world.
                Our mission has three parts:
              </Points>
              <Points>
                <b> 1. </b>
                Leverage technology to address global problems defined in
                hackathon themes by building solutions with local impact
              </Points>
              <Points>
                <b> 2. </b>
                Encourage collaboration in a team environment among the future
                leaders of a globally connected world
              </Points>
              <Points>
                <b> 3. </b>
                Further inspire the adoption of student-run hackathons around
                the world as a means to promote a culture of pioneering
                innovation
              </Points>{" "}
            </Left>
            <Right width={["95%", "50%", "50%"]}>
              <Text
                fontSize={["1.5em", "1.5em", "2.5em"]}
                ml={["0", "10%", "20%"]}
                mt={["0%", "0%", "20%"]}
              >
                Competition Introduction
              </Text>
            </Right>
          </Section>
          <Themes />
        </Wrapper>
      </OWrapper>
    );
  }
}

export default Intro;
