import styled from "styled-components";
import { Flex } from "grid-styled";
import { fontSize, space, width, themeGet } from "styled-system";

import { BackDrop } from "../../assests/background.svg";

export const Wrapper = styled(Flex)`
  font-family: ${themeGet("fonts.primary")};
  width: 100vw;
  margin: auto;
  flex-direction: column;
  background: black;
  margin-left: -8px;
  margin-bottom: -8px;
  min-height: 100vh;
  padding-top: 65px;
`;

export const Heading = styled.div`
  ${fontSize};
  font-weight: bolder;
  text-align: center;
  color: ${themeGet("colors.primary")};
  margin-top: 15px;
  margin-bottom: 30px;
`;

export const Subheading = styled.div`
  font-size: 2.2em;
  font-weight: bold;
  text-align: center;
  color: ${themeGet("colors.secondary")};
  margin-bottom: 50px;
  margin-top: 15px;
`;

export const SponsorLogo = styled.img`
  margin: 50px;
  margin-left: 0;
  margin-top: 0;
  width: 250px;
  max-height: 300px;
`;

export const LogoList = styled(Flex)`
  ${width};
  margin: auto;
  flex-wrap: wrap;
  justify-content: space-between;
`;
