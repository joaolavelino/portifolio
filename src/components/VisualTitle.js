import React from "react";
import styled from "styled-components";
import content from "../content.json";
import { langPack } from "../util/langPack";
import { motion } from "framer-motion";
import VisualCard from "./VisualCard";
import visual from "../img/art.png";
import { cardsStaggerAnimation } from "../util/animation";

const VisualTitle = ({ lang }) => {
  const pageText = content.visual;
  const text = langPack(pageText, lang);

  return (
    <StyledVisualTitle>
      <div className="title">
        <div className="title-title">
          <img src={visual} alt="pen icon" />
          <h3>{text.title}</h3>
        </div>
        <p>{text.p1}</p>
        <a
          href="https://www.instagram.com/joaoavelino.art/"
          target="_blank"
          rel="noreferrer"
        >
          <button>Instagram</button>
        </a>
      </div>
      <div className="projects">
        <h3>{text.projects}</h3>
        <motion.div className="projects-icons" variants={cardsStaggerAnimation}>
          {pageText.projects.map((e, index) => (
            <VisualCard
              e={e}
              src={process.env.PUBLIC_URL + `/img/visual/${e}.png`}
              alt={`${e} icon`}
              key={`visualProject${index}`}
            />
          ))}
        </motion.div>
      </div>
    </StyledVisualTitle>
  );
};

const StyledVisualTitle = styled(motion.div)`
  .title {
    .title-title {
      display: flex;
      align-items: center;
      gap: 1rem;
      img {
        width: 2rem;
        height: 2rem;
      }
    }

    button {
      margin-top: 1rem;
    }
  }
  .projects-icons {
    width: 100%;
    padding: 4rem 1rem;
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-flow: row wrap;
  }
`;

export default VisualTitle;
