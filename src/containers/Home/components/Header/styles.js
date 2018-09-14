import styled from "styled-components";
import { Flex } from "grid-styled";
import { fontSize, space, width, themeGet, height } from "styled-system";

import { BackDrop } from "../../assests/background.svg";

export const Wrapper = styled(Flex)`
  font-family: ${themeGet("fonts.primary")};
  ${width};
  margin: auto;
  height: 100vh + 100px;
  padding-top: 100px;
`;

export const Body = styled(Flex)`
  flex-direction: column;
  ${width};
  margin: auto;
`;

export const Heading = styled.div`
  font-size: 5em;
  font-weight: bolder;
  ${fontSize};
`;

export const Subheading = styled.div`
  font-size: 2.2em;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const Text = styled.div`
  font-size: 1.4em;
  color: ${themeGet("colors.secondary")};
`;

export const Button = styled.button`
  font-family: ${themeGet("fonts.primary")};
  background-color: ${themeGet("colors.hack")};
  color: ${themeGet("colors.primary")};
  font-size: 1.5em;
  font-weight: bold;
  padding: 10px 30px 10px 30px;
  width: max-content;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  ${space};

  &:hover {
    transition: background-color 0.5s ease;
    background-color: #b22222;
  }
`;

export const HackImg = styled.img`
  ${height};
  width: auto;
`;
