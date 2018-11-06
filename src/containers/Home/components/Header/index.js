import React, { Component } from "react";

import {
  Wrapper,
  Body,
  Heading,
  Subheading,
  Button,
  Text,
  HackImg,
  Inner
} from "./styles.js";

import HackLogo from "../../assests/hh400.svg";
import Photo from "../../assests/headerbackground.png";

class Header extends Component {
  render() {
    return (
      <Wrapper flexDirection={["column", "column", "row"]} photo={Photo}>
        <Inner
          width={["95%", "95%", "1000px"]}
          flexDirection={["column", "column", "row"]}
        >
          <Body width={["100%", "100%", "600px"]}>
            <Heading fontSize={["3em", "4em", "5em"]}>
              HackHarvard Global 2018
            </Heading>
            <Subheading> Sponsored by Zhejiang Lab </Subheading>
            <Text>Think Global. Act Local. A different kind of hackathon.</Text>
            <a
              href="https://tianchi.aliyun.com/competition/introduction.htm?spm=5176.100066.0.0.3e7bd780TVwUD1&raceId=231692"
              target="_blank"
            >
              <Button m={["auto", "auto", "0"]} mt={["20px", "20px", "20px"]}>
                Register Now!
              </Button>
            </a>
          </Body>
          <HackImg
            src={HackLogo}
            alt="HackHarvard Global"
            height={["300px", "60%", "100%"]}
          />
        </Inner>
      </Wrapper>
    );
  }
}

export default Header;
