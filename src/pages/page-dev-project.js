import { motion } from "framer-motion";
import styled from "styled-components";
import React from "react";
import WebDevProjectInfo from "../components/WebDevProjectInfo";
import { staggerAnimation } from "../util/animation";

const WebDevProject = ({ lang }) => {
  return (
    <StyledWebDevProject
      variants={staggerAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <WebDevProjectInfo lang={lang} />
    </StyledWebDevProject>
  );
};

const StyledWebDevProject = styled(motion.main)``;

export default WebDevProject;
