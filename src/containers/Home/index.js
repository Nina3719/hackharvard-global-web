import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import Navigation from "../../components/Navigation";
import Header from "./components/Header";
import About from "./components/About";
import Faq from "./components/Faq";
import Sponsors from "./components/Sponsors";

import { Wrapper, Links } from "./styles.js";

class Home extends Component {
  render() {
    return (
      <Wrapper>
        {/* <Links href="#Home">HackHarvard Global</Links>
        <Links href="#About">About</Links>
        <Links href="#Faq">FAQs</Links>
        <Links href="#Sponsors">Sponsors</Links> */}
        <Navigation />

        <ScrollableAnchor id={"Home"}>
          <Header />
        </ScrollableAnchor>
        <ScrollableAnchor id={"About"}>
          <About />
        </ScrollableAnchor>
        <ScrollableAnchor id={"Faq"}>
          <Faq />
        </ScrollableAnchor>
        <ScrollableAnchor id={"Sponsors"}>
          <Sponsors />
        </ScrollableAnchor>
      </Wrapper>
    );
  }
}

export default Home;
