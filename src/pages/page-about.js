import React from "react";
import styled from "styled-components";
import AboutBody from "../components/AboutBody";
import AboutMenu from "../components/AboutMenu";
import { motion } from "framer-motion";
import { pageAnimation } from "../util/animation";

const About = ({ lang }) => {
  return (
    <StyledAbout
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutMenu />
      <div className="break" />
      <div className="break-vertical" />
      <AboutBody lang={lang} />
    </StyledAbout>
  );
};

const StyledAbout = styled(motion.main)`
  display: flex;
  flex-direction: column;

  .break-vertical {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .break {
      display: none;
    }
    .break-vertical {
      display: block;
    }
  }
`;

export default About;
