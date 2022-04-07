import React from "react";
import styled from "styled-components";
import content from "../content.json";
import { langPack } from "../util/langPack";
import { motion } from "framer-motion";
import design from "../img/design.png";
import instagram from "../img/instagram.png";
import { useNavigate } from "react-router";
import {
  cardAnimation,
  cardsStaggerAnimation,
  bigCardAnimation,
} from "../util/animation";
import { colors } from "../GlobalStyles";

const DesignTitle = ({ lang }) => {
  const pageText = content.design;
  const text = langPack(pageText, lang);
  const navigate = useNavigate();

  return (
    <StyledDesignTitle>
      <motion.div className="title" variants={bigCardAnimation}>
        <img src={design} alt="html tag icon" className="icon" />
        <h3 id="title-title">{text.title}</h3>
        <p>{text.p1}</p>
        <motion.div className="toolkit-icons" variants={cardsStaggerAnimation}>
          {pageText.tools.map((e, index) => (
            <motion.img
              src={process.env.PUBLIC_URL + `/img/icons/${e}.png`}
              alt={`${e} icon`}
              key={`designTool${index}`}
              variants={cardAnimation}
            />
          ))}
        </motion.div>
        <a
          className="title-link"
          href="https://www.instagram.com/joaoavelino.art"
          target="_blank"
          rel="noreferrer"
        >
          <button>
            <img src={instagram} alt="github" />
          </button>
        </a>
      </motion.div>

      <div className="projects">
        <h3>{text.projects}</h3>
        <motion.div className="projects-icons" variants={cardsStaggerAnimation}>
          {pageText.projects.map((e, index) => (
            <motion.img
              src={process.env.PUBLIC_URL + `/img/projects/${e.logo}.png`}
              alt={`${e.title} icon`}
              key={`designProject${index}`}
              className="box-shadow hover-scale-link"
              onClick={() => navigate(`/design/project/${e.id}`)}
              variants={cardAnimation}
            />
          ))}
        </motion.div>
      </div>
    </StyledDesignTitle>
  );
};

const StyledDesignTitle = styled(motion.div)`
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
    background-color: ${colors.pink};
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
    padding: 2rem 0;
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

  .toolkit-icons {
    padding: 2rem 0 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    @media screen and (min-width: 425px) {
      padding: 2rem 2rem;
    }
    @media screen and (min-width: 640px) {
      padding: 2rem 0;
      justify-content: flex-start;
    }
    img {
      height: 3rem;
    }
  }
`;

export default DesignTitle;
