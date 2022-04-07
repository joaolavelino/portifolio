import React from "react";
import MusicEmbed from "../components/MusicEmbed";
import MusicTitle from "../components/MusicTitle";
import { pageAnimation } from "../util/animation";
import { motion } from "framer-motion";
import styled from "styled-components";

const Music = ({ lang }) => {
  return (
    <StyledMusic
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <MusicTitle lang={lang} />
    </StyledMusic>
  );
};

const StyledMusic = styled(motion.main)`
  @media screen and (min-width: 1024px) {
    padding-bottom: 0;
  }
`;

export default Music;
