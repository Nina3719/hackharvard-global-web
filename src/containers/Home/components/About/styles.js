import styled from "styled-components";
import { Flex } from "grid-styled";
import { fontSize, space, width, themeGet } from "styled-system";

import { BackDrop } from "../../assests/background.svg";

export const Wrapper = styled(Flex)`
  font-family: ${themeGet("fonts.primary")};
  margin: auto;
  ${width};
  flex-direction: column;
  min-height: 100vh;
  padding-top: 65px;
  margin-top: 65px;
`;

export const Heading = styled.div`
  ${fontSize};
  font-weight: bolder;
  margin-bottom: 20px;
  margin-top: 50px;
`;

export const Move = styled.div`
  margin-left: 60px;
`;

export const Text = styled.div`
  ${fontSize};
  color: ${themeGet("colors.secondary")};
  margin-right: 15px;
  text-align: justify;
  line-height: 30px;
`;

export const Img = styled.img`
  ${width};
  @media (max-width: 400px) {
    display: none;
  }
`;

export const Body = styled(Flex)``;
