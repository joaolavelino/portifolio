import React from "react";
import styled from "styled-components";
import content from "../content.json";
import { langPack } from "../util/langPack";
import { motion } from "framer-motion";
import webdev from "../img/webdev.png";
import { useNavigate } from "react-router";
import { cardAnimation, cardsStaggerAnimation } from "../util/animation";

const WebDevTitle = ({ lang }) => {
  const pageText = content.webdev;
  const text = langPack(pageText, lang);
  const navigate = useNavigate();

  return (
    <StyledWebDevTitle>
      <div className="title">
        <div className="title-title">
          <img src={webdev} alt="html tag icon" />
          <h3>{text.title}</h3>
        </div>
        <p>{text.p1}</p>
        <a
          href="https://github.com/joaolavelino/"
          target="_blank"
          rel="noreferrer"
        >
          <button>Github</button>
        </a>
      </div>
      <div className="projects">
        <h3>{text.projects}</h3>
        <motion.div className="projects-icons" variants={cardsStaggerAnimation}>
          {pageText.projects.map((e, index) => (
            <motion.img
              src={process.env.PUBLIC_URL + `/img/projects/${e.logo}.png`}
              alt={`${e.title} icon`}
              key={`webdevIcons${index}`}
              className="hover-scale-link box-shadow"
              onClick={() => navigate(`/webdev/project/${e.id}`)}
              variants={cardAnimation}
            />
          ))}
        </motion.div>
      </div>
      <div className="toolkit">
        <h3>{text.toolkit}</h3>
        <motion.div className="toolkit-icons" variants={cardsStaggerAnimation}>
          {pageText.tools.map((e, index) => (
            <motion.img
              src={process.env.PUBLIC_URL + `/img/icons/${e}.png`}
              alt={`${e} icon`}
              key={`webdevTool${index}`}
              variants={cardAnimation}
            />
          ))}
        </motion.div>
      </div>
    </StyledWebDevTitle>
  );
};

const StyledWebDevTitle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  .title {
    .title-title {
      display: flex;
      align-items: center;
      gap: 1rem;
      img {
        width: 3rem;
        height: 2rem;
      }
    }
  }
  .title button {
    margin-top: 1rem;
  }
  .projects-icons {
    padding: 2rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }
  img {
    height: 8rem;
    @media screen and (min-width: 1024px) {
      height: 10rem;
    }
  }

  .toolkit-icons {
    padding: 2rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    img {
      height: 3rem;
    }
  }
`;

export default WebDevTitle;
