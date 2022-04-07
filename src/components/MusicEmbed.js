import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { enlarge } from "../util/animation";

const MusicEmbed = () => {
  return (
    <StyledMusicEmbed className="embeds">
      <motion.iframe
        variants={enlarge}
        width="350"
        height="350"
        src="https://www.youtube.com/embed/videoseries?list=PLDsc1Dx1NJWfZUO2TvMOPzGnFAaL1TZJR"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></motion.iframe>

      <motion.iframe
        variants={enlarge}
        width="350"
        height="350"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1130655790&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></motion.iframe>
    </StyledMusicEmbed>
  );
};

const StyledMusicEmbed = styled.section`
  display: flex;
  flex-flow: row wrap;
  gap: 3rem;
  justify-content: center;
`;

export default MusicEmbed;
