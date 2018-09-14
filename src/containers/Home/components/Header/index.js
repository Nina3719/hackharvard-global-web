import React, { Component } from "react";

import {
  Wrapper,
  Body,
  Heading,
  Subheading,
  Button,
  Text,
  HackImg
} from "./styles.js";

import HackLogo from "../../assests/hh400.svg";

class Header extends Component {
  render() {
    return (
      <Wrapper
        flexDirection={["column", "column", "row"]}
        width={["100%", "100%", "1000px"]}
      >
        <Body width={["100%", "100%", "600px"]}>
          <Heading fontSize={["3em", "4em", "5em"]}>HackHarvard Global</Heading>
          <Subheading> November 2018 </Subheading>
          <Text>
            Compete in the largest hackathon at Harvard University, from
            anywhere in the world
          </Text>
          <Button m={["auto", "auto", "0"]} mt={["20px", "20px", "20px"]}>
            Register Now!
          </Button>
        </Body>
        <HackImg
          src={HackLogo}
          alt="HackHarvard Global"
          height={["300px", "60%", "100%"]}
        />
      </Wrapper>
    );
  }
}

export default Header;
