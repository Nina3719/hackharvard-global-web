import styled from "styled-components";
import { Flex } from "grid-styled";
import {
  fontSize,
  space,
  width,
  themeGet,
  flexDirection,
  justifyContent
} from "styled-system";

import { BackDrop } from "../../assests/background.svg";

export const Wrapper = styled(Flex)`
  font-family: ${themeGet("fonts.primary")};
  margin: auto;
  ${width};
  flex-direction: column;
  padding-top: 80px;
  ${flexDirection};
  min-height: 100vh;
`;

export const Right = styled.div`
  ${width};
  ${fontSize};
  ${space};
  line-height: 30px;
`;

export const Left = styled.div`
  ${width};
  margin-right: 10px;
  line-height: 30px;
  ${space};
  background-color: ${props => (props.background ? "black" : "white")};
  color: ${props => (props.background ? "white" : "black")};
  padding: ${props => (props.background ? "20px" : "0")};
  box-shadow: ${props =>
    props.background ? "10px 10px red, -1em -0.5em .4em olive" : ""};
`;

export const Points = styled.div`
  font-size: 16px;
  margin-bottom: 7px;
  ${space};
`;

export const Text = styled.div`
  font-weight: bold;
  color: ${themeGet("colors.hack")};
  ${fontSize};
  ${justifyContent};
  ${space};
  margin-bottom: 15px;
  line-height: 50px;
`;

export const Section = styled(Flex)`
  margin-bottom: 80px;
  ${flexDirection};
`;
