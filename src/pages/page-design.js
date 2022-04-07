import React from "react";
import styled from "styled-components";
import DesignTitle from "../components/DesignTitle";
import { pageAnimation } from "../util/animation";
import { motion } from "framer-motion";

const Design = ({ lang }) => {
  return (
    <StyledDesign
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <DesignTitle lang={lang} />
    </StyledDesign>
  );
};

const StyledDesign = styled(motion.main)`
  @media screen and (min-width: 1024px) {
    padding-bottom: 0;
  }
`;

export default Design;
