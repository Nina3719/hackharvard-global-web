import styled from "styled-components";
import { Flex } from "grid-styled";
import { fontSize, space, width, themeGet } from "styled-system";

import { BackDrop } from "../../assests/background.svg";

export const Wrapper = styled(Flex)`
  font-family: ${themeGet("fonts.primary")};
  margin: auto;
  ${width};
  flex-direction: column;
  height: 100vh;
  padding-top: 65px;
`;

export const Heading = styled.div`
  ${fontSize};
  font-weight: bolder;
  margin-bottom: 20px;
  margin-top: 50px;
`;

export const Text = styled.div`
  ${fontSize};
  color: ${themeGet("colors.secondary")};
`;

export const Img = styled.img`
  @media (max-width: 400px) {
    display: none;
  }
`;

export const Body = styled(Flex)``;
