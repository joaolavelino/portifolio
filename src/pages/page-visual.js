import React from "react";
import styled from "styled-components";
import VisualTitle from "../components/VisualTitle";
import { motion } from "framer-motion";
import { staggerAnimation } from "../util/animation";

const Visual = ({ lang }) => {
  return (
    <StyledVisual
      variants={staggerAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <VisualTitle lang={lang} />
    </StyledVisual>
  );
};

const StyledVisual = styled(motion.main)`
  @media screen and (min-width: 1024px) {
    padding-bottom: 0;
  }
`;

export default Visual;
