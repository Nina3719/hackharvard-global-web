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
`;

export const Text = styled.div`
  font-weight: bold;
  color: ${themeGet("colors.hack")};
  ${fontSize};
  ${justifyContent};
  ${space};
  margin-bottom: 15px;
`;

export const Section = styled(Flex)`
  margin-bottom: 150px;
  ${flexDirection};
`;

export const Right = styled.div`
  ${width};
  ${fontSize};
  ${space};
  line-height: 30px;
  background-color: ${props => (props.background ? "black" : "white")};
  color: ${props => (props.background ? "white" : "black")};
  padding: ${props => (props.background ? "20px" : "0")};
  box-shadow: ${props =>
    props.background ? "10px 10px red, -1em -0.5em .4em grey" : ""};
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
    props.background ? "10px 10px red, -1em -0.5em .4em grey" : ""};
`;

export const Points = styled.div`
  font-size: 16px;
  margin-bottom: 7px;
`;

export const Note = styled.div`
  color: ${themeGet("colors.secondary")};
  padding-top: 5px;
  font-size: 14px;
`;

export const Big = styled.span`
  ${fontSize};
`;

export const ThemeImg = styled.img`
  max-width: 500px;
  margin-top: 50px;
  ${width};
  ${space};
`;
