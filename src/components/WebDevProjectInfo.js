import React from "react";
import content from "../content.json";
import { langPack } from "../util/langPack";
import styled from "styled-components";
import { useParams } from "react-router";
import { cardAnimation, cardsStaggerAnimation } from "../util/animation";
import { motion } from "framer-motion";

const WebDevProjectInfo = ({ lang }) => {
  const { id } = useParams();
  const project = content.webdev.projects.filter((e) => e.id === id)[0];
  const text = langPack(project, lang);

  return (
    <StyledWebDevProjectInfo>
      {id && (
        <>
          <div className="bg">
            <div className="top-gradient" />
            <img
              src={process.env.PUBLIC_URL + `/img/projects/${project.bg}.png`}
              alt="project screenshot"
            />
          </div>
          <div className="content">
            <div className="bottom-gradient" />
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
              <h3>{project.title}</h3>
              <div className="links">
                <a href={project.repo}>
                  <button className="small">Github</button>
                </a>
                <a href={project.url}>
                  <button className="small">Project</button>
                </a>
              </div>
            </div>
            <div className="info">
              <p>{text.description}</p>
              <h4>{text.librarytagline}</h4>
              <ul>
                {project.librarylist.map((e, index) => (
                  <li key={`libname${index}`}>{e}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </StyledWebDevProjectInfo>
  );
};

const StyledWebDevProjectInfo = styled.section`
  min-height: 100vh;

  .bg {
    position: fixed;
    top: 0;

    .top-gradient {
      position: fixed;
      width: 100vw;
      height: 199px;
      left: 0px;
      top: 0px;
      z-index: 5;
      background: linear-gradient(
        180deg,
        #000000 8.54%,
        rgba(0, 0, 0, 0) 74.87%
      );
    }

    img {
      width: 100vw;
      height: 60vh;
      object-fit: cover;
      object-position: left;
    }
  }
  .content {
    padding: 30rem 3rem 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .bottom-gradient {
      position: absolute;
      width: 100vw;
      height: calc(100% + 5rem);
      left: 0px;
      top: 25rem;
      z-index: 9;
      background: linear-gradient(180deg, #000000 80%, rgba(0, 0, 0, 0) 100%);
      transform: matrix(1, 0, 0, -1, 0, 0);
    }
  }
  .title {
    position: relative;
    z-index: 10;
  }

  .links {
    display: flex;
    gap: 2rem;
    padding: 1rem 0 0;
  }
  .title-libs {
    display: flex;
    gap: 1rem;
    img {
      height: 3rem;
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
