import React, { Component } from "react";

import {
  Wrapper,
  Heading,
  Subheading,
  LogoList,
  SponsorLogo
} from "./styles.js";

import alibaba from "./assests/alibaba1.png";
import seas from "./assests/seas.svg";
import tianchi from "./assests/tianchi1.png";
import zhe from "./assests/zhejiang.png";

class Sponsors extends Component {
  render() {
    const Logos = [zhe, alibaba, tianchi];
    return (
      <Wrapper>
        <Heading fontSize={["2em", "3em", "4em"]}>
          {" "}
          Organizers and Sponsors{" "}
        </Heading>
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
