import styled from "styled-components";
import { Flex } from "grid-styled";
import { fontSize, space, width, themeGet, height } from "styled-system";

export const NavBarWrapper = styled(Flex)`
  width: 100%;
  font-family: ${themeGet("fonts.primary")};
  flex-direction: row;
  /* background-color: black; */
  justify-content: space-between;
  font-size: 2em;
  padding-bottom: 10px;
  padding-top: 10px;
  /* box-shadow: 1px 1px 2px 2px grey; */
  position: fixed;
  top: 0;
  margin-left: -8px;
`;

export const Wrapper = styled(Flex)`
  flex-direction: row;
`;

export const Button = styled.img`
  height: 50px;
  ${space};
`;

export const Links = styled.a`
  text-decoration: none;
  color: ${props => (props.current ? "#E20029" : "white")};
  margin-right: 50px;
  margin-top: 13px;
  ${space};
`;
