import React, { Component } from "react";
import Media from "react-media";

import Logo from "./assets/logo.svg";

import { NavBarWrapper, Wrapper, Links, Button } from "./styles";

class NavigationBar extends Component {
  render() {
    const now = window.location.hash;
    const NavigationBar = () => (
      <Wrapper>
        <Links href="#About" current={now === "#About"}>
          About
        </Links>
        <Links href="#Intro" current={now === "#Intro"}>
          Competition
        </Links>
        <Links href="#Faq" current={now === "#Faq"}>
          FAQs
        </Links>
        <Links href="#Sponsors" current={now === "#Sponsors"}>
          Sponsors
        </Links>
      </Wrapper>
    );

    return (
      <NavBarWrapper>
        <Links href="#Home" mt="0" current={now === "#Home"}>
          <Button src={Logo} alt="HackHarvard Logo" ml="10px" />
          <Media query="(min-width: 1199px)">
            {matches => (matches ? <span> HackHarvard Global </span> : <div />)}
          </Media>
        </Links>

        <Media query="(min-width: 640px)">
          {matches => {
            if (matches) {
              return <NavigationBar />;
            }
            return null;
          }}
        </Media>
      </NavBarWrapper>
    );
  }
}

export default NavigationBar;
