import React from "react";
import styled from "styled-components";
import content from "../content.json";
import { langPack } from "../util/langPack";
import { motion } from "framer-motion";
import soundcloud from "../img/soundcloud.png";
import youtube from "../img/youtube.png";
import spotify from "../img/spotify.png";
import deezer from "../img/deezer.png";
import apple from "../img/apple.png";
import { cardAnimation, cardsStaggerAnimation } from "../util/animation";

const MusicTitle = ({ lang }) => {
  const pageText = content.music;
  const text = langPack(pageText, lang);

  return (
    <StyledMusicTitle>
      <h3>{text.title}</h3>
      <p>{text.p1}</p>
      <motion.div className="music-links" variants={cardsStaggerAnimation}>
        <motion.a
          href="https://www.youtube.com/channel/UCHiGMw2hJiI-JmwxNbsgZVQ"
          variants={cardAnimation}
          target="_blank"
          rel="noreferrer"
        >
          <img src={youtube} alt="youtube logo" className="hover-scale-link" />
        </motion.a>
        <motion.a
          href="https://soundcloud.com/joao-avelino"
          variants={cardAnimation}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={soundcloud}
            alt="soundcloud logo"
            className="hover-scale-link"
          />
        </motion.a>
        <motion.a
          href="https://open.spotify.com/artist/5p0waxjpSjCe5aiJ25a6JA"
          variants={cardAnimation}
          target="_blank"
          rel="noreferrer"
        >
          <img src={spotify} alt="spotify logo" className="hover-scale-link" />
        </motion.a>
        <motion.a
          href="https://www.deezer.com/br/artist/60838752"
          variants={cardAnimation}
          target="_blank"
          rel="noreferrer"
        >
          <img src={deezer} alt="deezer logo" className="hover-scale-link" />
        </motion.a>
        <motion.a
          href="https://music.apple.com/gb/artist/joao-avelino/1505914384"
          variants={cardAnimation}
          target="_blank"
          rel="noreferrer"
        >
          <img src={apple} alt="apple logo" className="hover-scale-link" />
        </motion.a>
      </motion.div>
    </StyledMusicTitle>
  );
};

const StyledMusicTitle = styled(motion.div)`
  .music-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 2rem 3rem;
    flex-wrap: wrap;
    @media screen and (min-width: 768px) {
      padding: 2rem 10rem;
    }
    @media screen and (min-width: 1440px) {
      padding: 2rem 15rem;
    }

    img {
      height: 3rem;
    }
  }

  .music-link {
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;

    padding: none;

    svg {
      transform: scale(1.2);
      color: black;
      z-index: 10;
    }
  }
`;

export default MusicTitle;
