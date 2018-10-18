import React, { Component } from "react";

import {
  Wrapper,
  Left,
  Right,
  Section,
  Text,
  Points,
  Note,
  Big,
  ThemeImg
} from "./styles.js";

import education from "./assests/education.jpg";
import trash from "./assests/trash.jpg";
import elderly from "./assests/elderly.jpg";
import hack from "./assests/hack.jpg";

class Intro extends Component {
  render() {
    return (
      <Wrapper flexDirection="column" width={["100%", "100%", "1000px"]}>
        <Section flexDirection={["column", "row", "row"]}>
          <Left width={["95%", "50%", "50%"]} m="auto">
            <Text
              fontSize={["1.5em", "1.5em", "2em"]}
              ml={["0", "10%", "10%"]}
              mt={["20%", "0%", "0%"]}
              pt="20px"
            >
              HACKATHON THEMES
              <ThemeImg src={hack} width={["100%", "500px", "500px"]} />
            </Text>
          </Left>
          <Right
            width={["85%", "50%", "50%"]}
            fontSize="16px"
            m="auto"
            background={true}
          >
            HackHarvard is uniquely situated because of our experienced
            hackathon organizing team, immense international demand for our
            event, and university’s recognition in countries around the world.
            This positioning necessitates our expansion beyond just our
            in-person 36-hour hackathon event:
            <b> building an online competition</b>, parallel but consistent with
            the mission of HackHarvard, to increase access to the HackHarvard
            model is a furthering of our mission statement. HackHarvard Global
            aims to provide access to HackHarvard for people who are too far
            away to attend HackHarvard in person. The event will address global
            problems, emphasizing three themes:
          </Right>
        </Section>
        <Section flexDirection={["column-reverse", "row", "row"]}>
          <Left width={["85%", "50%", "50%"]} m="auto" background={true}>
            <Points>
              <b>1.1 Primary education - </b>
              how can we find ways to better teach our youngest students
              effectively in the 21st century? Assistive tech - for students
              with special needs/disabilities and improving their work?
            </Points>

            <Points>
              <b> 1.2 Rural education - </b>
              how do those who live in rural areas gain access to the same
              resources that urban students have for education?
            </Points>

            <Points>
              <b>1.3 Continuing education - </b>
              how can we provide education to adults who are interested in
              learning even after finishing school?
            </Points>

            <Points>
              <b>1.4 Supplemental education - </b>
              what are other ways students can enrich their minds while enrolled
              in primary school, outside of classroom?
            </Points>

            <Note>
              <b>** </b>
              this would involve both designing a platform and designing actual
              educational material (at least some) for that platform
            </Note>
          </Left>
          <Right width={["95%", "50%", "50%"]} m="auto">
            <Text
              fontSize={["1.2em", "1.5em", "2em"]}
              ml={["0%", "10%", "10%"]}
              mt={["10%", "0%", "0%"]}
            >
              <Big fontSize={["2.5em", "2.5em", "2.5em"]}>01 </Big> <br />
              Educational technologies
              <ThemeImg src={education} width={["100%", "500px", "500px"]} />
            </Text>
          </Right>
        </Section>
        <Section flexDirection={["column", "row", "row"]}>
          <Left width={["95%", "50%", "50%"]} m="auto">
            <Text
              fontSize={["1.2em", "1.5em", "2em"]}
              ml={["0%", "3%", "3%"]}
              mr="3%"
              mt={["10%", "0%", "0%"]}
            >
              <Big fontSize={["2.5em", "2.5em", "2.5em"]}>02 </Big> <br />
              Environmental technologies{" "}
              <ThemeImg
                src={trash}
                width={["100%", "500px", "500px"]}
                ml={["0", "-50px", "-75px"]}
              />
            </Text>
          </Left>
          <Right width={["85%", "50%", "50%"]} m="auto" background={true}>
            <Points>
              <b> 2.1 Full stream recycling/reuse (physical materials) - </b>
              this is projects that allow for better reuse and recycling of old
              materials to reduce trash impact
            </Points>

            <Points>
              <b>
                2.2 Efficiency of transportation/lifestyle (energy conservation)
                -
              </b>
              how can we help people reduce their energy usage to live more
              sustainable lifestyles?
            </Points>

            <Points>
              <b>
                2.3 Deforestation/environmental destruction of forests/dams -
              </b>
              how can we find alternatives to this kind of unsustainable
              development?
            </Points>

            <Points>
              <b> 2.4 Smog and air quality - </b>
              how to improve it? How to protect people from its effects?
            </Points>

            <Points>
              <b> 2.5 Awareness of local environmental implications -</b> how
              can we educate people on the environmental changes around them?
            </Points>

            <Note>
              <b>**</b> involves technological component + some sort of
              implementation plan
            </Note>
          </Right>
        </Section>
        <Section flexDirection={["column-reverse", "row", "row"]}>
          <Left width={["85%", "50%", "50%"]} m="auto" background={true}>
            <Points>
              <b>
                3.1 Care for the elderly from a emotional/social perspective -
              </b>
              how do we provide companionship to the elderly while their
              children are busy working/unable to stay with them?
            </Points>

            <Points>
              <b> 3.2 Care for the elderly from a health perspective - </b>
              how do we monitor the health of the elderly and ensure they are
              watched over?
            </Points>

            <Points>
              <b> 3.3 Communication methods/accessible technologies - </b>
              how do we connect the elderly with their children/caretakers in
              intuitive and effective ways? Vulnerability of older populations -
              how can we protect the elderly from scams, phishing, targeting for
              personal exploitation and gain?
            </Points>

            <Points>
              <b> 3.4 Work/livelihood for the elderly - </b> How can we
              incorporate elderly people back into the workforce in creative
              ways? How can they contribute without backbreaking labor or
              involvement?
            </Points>

            <Note>
              <b> ** </b>
              involves technology + some indication of how we would go about
              implementing
            </Note>
          </Left>
          <Right width={["95%", "50%", "50%"]} m="auto">
            <Text
              fontSize={["1.2em", "1.5em", "2em"]}
              ml={["0%", "10%", "10%"]}
              mt={["10%", "0%", "0%"]}
            >
              <Big fontSize={["2.5em", "2.5em", "2.5em"]}>03 </Big> <br />
              Technologies for the elderly{" "}
              <ThemeImg src={elderly} width={["100%", "500px", "500px"]} />
            </Text>
          </Right>
        </Section>
      </Wrapper>
    );
  }
}

export default Intro;
