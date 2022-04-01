import React from "react";
import styled from "styled-components";
import content from "../content.json";
import { langPack } from "../util/langPack";
import { motion } from "framer-motion";
import design from "../img/design.png";
import { useNavigate } from "react-router";
import { cardAnimation, cardsStaggerAnimation } from "../util/animation";

const DesignTitle = ({ lang }) => {
  const pageText = content.design;
  const text = langPack(pageText, lang);
  const navigate = useNavigate();

  return (
    <StyledDesignTitle>
      <div className="title">
        <div className="title-title">
          <img src={design} alt="bezier icon" />
          <h3>{text.title}</h3>
        </div>
        <div>
          <p>{text.p1}</p>
          <a
            href="https://www.instagram.com/joaoavelino.art"
            target="_blank"
            rel="noreferrer"
          >
            <button>Instagram</button>
          </a>
        </div>
      </div>

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
      <div className="toolkit">
        <h3>{text.toolkit}</h3>
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
      </div>
    </StyledDesignTitle>
  );
};

const StyledDesignTitle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 4rem;
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

export default DesignTitle;
