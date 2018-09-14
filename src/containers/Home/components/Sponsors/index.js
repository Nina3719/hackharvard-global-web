import React, { Component } from "react";

import {
  Wrapper,
  Heading,
  Subheading,
  LogoList,
  SponsorLogo
} from "./styles.js";

import alibaba from "./assests/alibaba.svg";
import seas from "./assests/seas.svg";
import tianchi from "./assests/tianchi.svg";

class Sponsors extends Component {
  render() {
    const Logos = [seas, alibaba, tianchi];
    return (
      <Wrapper>
        <Heading fontSize={["3em", "3em", "5em"]}> Sponsors </Heading>
        <Subheading> Choose your affiliation </Subheading>
        <LogoList width={["95%", "95%", "1000px"]}>
          {Logos.map(sponsored => (
            <SponsorLogo src={sponsored} alt="Logo" />
          ))}
        </LogoList>
      </Wrapper>
    );
  }
}

export default Sponsors;
