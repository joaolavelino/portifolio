import React from "react";
import styled from "styled-components";
import content from "../content.json";
import { langPack } from "../util/langPack";
import { motion } from "framer-motion";
import VisualCard from "./VisualCard";
import visual from "../img/art.png";
import instagram from "../img/instagram.png";
import { bigCardAnimation, cardsStaggerAnimation } from "../util/animation";
import { colors } from "../GlobalStyles";

const VisualTitle = ({ lang }) => {
  const pageText = content.visual;
  const text = langPack(pageText, lang);

  return (
    <StyledVisualTitle>
      <motion.div className="title" variants={bigCardAnimation}>
        <img src={visual} alt="html tag icon" className="icon" />
        <h3 id="title-title">{text.title}</h3>
        <p>{text.p1}</p>
        <a
          className="title-link"
          href="https://www.instagram.com/joaoavelino.art/"
          target="_blank"
          rel="noreferrer"
        >
          <button>
            <img src={instagram} alt="instagram" />
          </button>
        </a>
      </motion.div>
      <div className="projects">
        <motion.div className="projects-icons" variants={cardsStaggerAnimation}>
          {pageText.projects.map((e, index) => (
            <VisualCard
              e={e}
              src={process.env.PUBLIC_URL + `/img/visual/${e}Small.png`}
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
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (min-width: 1024px) {
    height: calc(100vh - 200px - 3rem);
    min-height: 600px;
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
    background-color: ${colors.yellow};
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
    img {
      height: 2rem;
    }
    .icon {
      width: 3rem;
    }
    .title-link {
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
    #title-title {
      color: ${colors.light};
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
  .projects-icons {
    padding: 0 0 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    @media screen and (min-width: 1024px) {
      justify-content: flex-start;
    }
  }
  img {
    height: 8rem;
    @media screen and (min-width: 1024px) {
      height: 10rem;
    }
  }
`;

export default VisualTitle;
