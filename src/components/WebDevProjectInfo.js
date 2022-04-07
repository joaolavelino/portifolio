import React from "react";
import content from "../content.json";
import { langPack } from "../util/langPack";
import styled from "styled-components";
import { useParams } from "react-router";
import {
  projectCardAnimation,
  reverseStaggerAnimation,
  cardsStaggerAnimation,
  cardAnimation,
} from "../util/animation";
import { motion } from "framer-motion";
import { colors } from "../GlobalStyles";
import github from "../img/github.png";

const WebDevProjectInfo = ({ lang }) => {
  const { id } = useParams();
  const project = content.webdev.projects.filter((e) => e.id === id)[0];
  const text = langPack(project, lang);

  return (
    <StyledWebDevProjectInfo variants={reverseStaggerAnimation}>
      {id && (
        <>
          <motion.div className="image" variants={projectCardAnimation}>
            <img
              src={process.env.PUBLIC_URL + `/img/projects/${project.bg}.png`}
              alt="project screenshot"
              className="bg"
            />
            <div className="links">
              <a href={project.repo} target="_blank" rel="noreferrer">
                <button className="small">
                  <img src={github} alt="github link" />
                </button>
              </a>
              <a href={project.url} target="_blank" rel="noreferrer">
                <button className="small">www</button>
              </a>
            </div>
          </motion.div>
          <motion.div className="content" variants={projectCardAnimation}>
            <h3 id="project-title">{project.title}</h3>
            <div className="title">
              <motion.div
                className="title-libs"
                variants={cardsStaggerAnimation}
              >
                {project.librarylist.map((e, index) => (
                  <motion.img
                    src={process.env.PUBLIC_URL + `/img/icons/${e}.png`}
                    alt={`${e} icon`}
                    key={`webdevToolProject${index}`}
                    variants={cardAnimation}
                  />
                ))}
              </motion.div>
            </div>
            <p>{text.description}</p>
          </motion.div>
        </>
      )}
    </StyledWebDevProjectInfo>
  );
};

const StyledWebDevProjectInfo = styled(motion.section)`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    padding-left: 8rem;
    padding-top: 5rem;
    height: calc(100vh - 200px - 3rem);
  }

  .image {
    position: relative;
    height: 423px;
    width: 100%;
    @media screen and (min-width: 1024px) {
      width: 50%;
      height: 100%;
    }

    .bg {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: left;
    }
    .links {
      position: absolute;
      display: flex;
      bottom: 2rem;
      right: 2rem;
      flex-direction: column;
      gap: 1.5rem;
    }
  }
  .content {
    padding: 3rem 2rem 5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: ${colors.dark};
    color: ${colors.light};
    @media screen and (min-width: 1024px) {
      width: 50%;
      height: 100%;
      padding-right: 8rem;
    }

    #project-title {
      color: ${colors.light};
    }
  }
  .title {
    position: relative;
    z-index: 10;
  }

  .title-libs {
    display: flex;
    gap: 1rem;
    img {
      height: 2.5rem;
    }
  }
  .info {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export default WebDevProjectInfo;
