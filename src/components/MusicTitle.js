import React from "react";
import styled from "styled-components";
import content from "../content.json";
import { langPack } from "../util/langPack";
import { motion } from "framer-motion";
import soundcloud from "../img/soundcloud.png";
import music from "../img/music.png";
import youtube from "../img/youtube.png";
import spotify from "../img/spotify.png";
import deezer from "../img/deezer.png";
import apple from "../img/apple.png";
import {
  bigCardAnimation,
  cardAnimation,
  cardsStaggerAnimation,
} from "../util/animation";
import { colors } from "../GlobalStyles";
import MusicEmbed from "./MusicEmbed";

const MusicTitle = ({ lang }) => {
  const pageText = content.music;
  const text = langPack(pageText, lang);

  return (
    <StyledMusicTitle>
      <motion.div className="title" variants={bigCardAnimation}>
        <img src={music} alt="html tag icon" className="icon" />
        <h3 id="title-title">{text.title}</h3>
        <p>{text.p1}</p>
        <motion.div className="music-links" variants={cardsStaggerAnimation}>
          <motion.a
            href="https://www.youtube.com/channel/UCHiGMw2hJiI-JmwxNbsgZVQ"
            variants={cardAnimation}
            target="_blank"
            rel="noreferrer"
          >
            <button>
              <img src={youtube} alt="youtube logo" />
            </button>
          </motion.a>
          <motion.a
            href="https://soundcloud.com/joao-avelino"
            variants={cardAnimation}
            target="_blank"
            rel="noreferrer"
          >
            <button>
              <img src={soundcloud} alt="youtube logo" className="title-link" />
            </button>
          </motion.a>
          <motion.a
            href="https://open.spotify.com/artist/5p0waxjpSjCe5aiJ25a6JA"
            variants={cardAnimation}
            target="_blank"
            rel="noreferrer"
          >
            <button>
              <img src={spotify} alt="youtube logo" className="title-link" />
            </button>
          </motion.a>
          <motion.a
            href="https://www.deezer.com/br/artist/60838752"
            variants={cardAnimation}
            target="_blank"
            rel="noreferrer"
          >
            <button>
              <img src={deezer} alt="youtube logo" className="title-link" />
            </button>
          </motion.a>
          <motion.a
            href="https://music.apple.com/gb/artist/joao-avelino/1505914384"
            variants={cardAnimation}
            target="_blank"
            rel="noreferrer"
          >
            <button>
              <img src={apple} alt="youtube logo" className="title-link" />
            </button>
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div className="projects" variants={cardsStaggerAnimation}>
        <MusicEmbed />
      </motion.div>
    </StyledMusicTitle>
  );
};

const StyledMusicTitle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (min-width: 1024px) {
    height: calc(100vh - 200px - 3rem);
    flex-direction: row;
    .break {
      display: none;
    }
  }
  .title {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    padding: 2rem 2rem;
    background-color: ${colors.green};
    color: ${colors.light};
    @media screen and (min-width: 1024px) {
      margin-top: 5rem;
      width: 50vw;
      height: calc(100% - 5rem);
      padding: 2rem 2rem 2rem 8rem;
    }
    @media screen and (min-width: 1440px) {
      padding: 2rem 2rem 2rem 16rem;
    }
    .icon {
      width: 3rem;
      height: 3rem;
    }
    #title-title {
      color: ${colors.light};
    }

    .music-links {
      margin-top: 2rem;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      gap: 1rem;
      padding: 0 2rem;

      button {
        padding: 1rem;
        img {
          width: 100%;
          object-fit: contain;
        }
      }
    }
  }

  .projects {
    padding: 0 1rem;
    @media screen and (min-width: 1024px) {
      margin-top: 5rem;
      width: 50vw;
      height: calc(100% - 5rem);
      padding: 0 4rem 0 0;
      overflow-y: scroll;
    }
    @media screen and (min-width: 1440px) {
      padding: 0 8rem 0 0;
    }
  }
`;

export default MusicTitle;
