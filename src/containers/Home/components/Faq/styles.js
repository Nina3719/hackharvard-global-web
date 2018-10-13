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
  padding-bottom: 200px;
`;

export const Heading = styled.div`
  font-weight: bolder;
  ${fontSize};
  margin-bottom: 50px;
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
  cursor: pointer;
  min-height: 50px;
  width: 100%;
  border-radius: 6px;
  padding-top: 15px;

  &:hover {
    background-color: black;
    color: white;
    text-align: center;
  }
`;

export const Answers = styled.div`
  ${fontSize};
  margin-bottom: 30px;
  display: ${props => (props.show ? "block" : "none")};
`;

export const Links = styled.a`
  text-decoration: none;
  ${fontSize};
  font-weight: bold;
  color: ${themeGet("colors.secondary")};
  text-align: center;
  margin-bottom: 50px;
  margin-top: 50px;
`;

export const OWrapper = styled.div`
  /* background: #dcdcdc; */
  width: 100vw;
  margin-left: -8px;
`;
