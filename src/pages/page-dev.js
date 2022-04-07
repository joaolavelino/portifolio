import React from "react";
import styled from "styled-components";
import WebDevTitle from "../components/WebDevTitle";
import { staggerAnimation } from "../util/animation";
import { motion } from "framer-motion";

const WebDev = ({ lang }) => {
  console.log(lang);
  return (
    <StyledWebDev
      variants={staggerAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <WebDevTitle lang={lang} />
    </StyledWebDev>
  );
};

const StyledWebDev = styled(motion.main)`
  @media screen and (min-width: 1024px) {
    padding-bottom: 0;
  }
`;

export default WebDev;
