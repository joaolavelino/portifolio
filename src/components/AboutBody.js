import React from "react";
import styled from "styled-components";
import content from "../content.json";
import { langPack } from "../util/langPack";
import { motion } from "framer-motion";
import { paragraphAnimation, staggerAnimation } from "../util/animation";

const AboutBody = ({ lang }) => {
  const pageText = content.about;
  const text = langPack(pageText, lang);
  return (
    <StyledAboutBody variants={staggerAnimation}>
      <motion.p variants={paragraphAnimation}>{text.p1}</motion.p>
      <motion.p variants={paragraphAnimation}>{text.p2}</motion.p>
      <motion.p variants={paragraphAnimation}>{text.p3}</motion.p>
    </StyledAboutBody>
  );
};

const StyledAboutBody = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 1024px) {
    width: 60%;
  }
  p {
    text-align: justify;
    padding: 0 3rem;
  }
`;

export default AboutBody;
