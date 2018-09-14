import styled from "styled-components";
import { Flex } from "grid-styled";
import { fontSize, space, width, themeGet } from "styled-system";
import { Link } from "react-router-dom";

import { BackDrop } from "../../assests/background.svg";

export const Wrapper = styled(Flex)`
  font-family: ${themeGet("fonts.primary")};
  margin: auto;
  ${width};
  flex-direction: column;
  padding-top: 80px;
`;

export const Heading = styled.div`
  font-weight: bolder;
  ${fontSize};
  margin-bottom: 20px;
`;

export const QAWrapper = styled(Flex)`
  font-family: ${themeGet("fonts.primary")};
  margin: auto;
  width: 100%;
  flex-direction: column;
`;

export const Questions = styled.div`
  ${fontSize};
  font-weight: bold;
  color: ${themeGet("colors.hack")};
  margin-bottom: 10px;
`;

export const Answers = styled.div`
  ${fontSize};
  margin-bottom: 30px;
`;

export const Links = styled.a`
  text-decoration: none;
  ${fontSize};
  font-weight: bold;
  color: ${themeGet("colors.secondary")};
  text-align: center;
  margin-bottom: 50px;
`;
