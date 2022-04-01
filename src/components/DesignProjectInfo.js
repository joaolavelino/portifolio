import React, { useState } from "react";
import content from "../content.json";
import { langPack } from "../util/langPack";
import styled from "styled-components";
import { useParams } from "react-router";
import DesignFullScreen from "./DesignFullScreen";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const DesignProjectInfo = ({ lang }) => {
  const { id } = useParams();
  const project = content.design.projects.filter((e) => e.id === id)[0];
  const text = langPack(project, lang);
  console.log(text);

  const [fullScreen, setFullScreen] = useState(false);

  return (
    <StyledDesignProjectInfo>
      <AnimatePresence>
        {fullScreen && (
          <DesignFullScreen
            setFullScreen={setFullScreen}
            image={process.env.PUBLIC_URL + `/img/projects/${project.bg}.png`}
            key="fullscreen"
          />
        )}
      </AnimatePresence>
      <div className="bg">
        <div className="top-gradient" />
        <div className="black"></div>
        <motion.img
          src={process.env.PUBLIC_URL + `/img/projects/${project.bg}.png`}
          alt="project screenshot"
          className="hover-scale-link"
          onClick={() => setFullScreen(true)}
          layoutId="design-img"
        />
      </div>
      <div className="content">
        <div className="bottom-gradient" />
        <div className="title">
          <h3>{project.title}</h3>
        </div>
        <div className="info">
          <p>{text.description}</p>
        </div>
      </div>
    </StyledDesignProjectInfo>
  );
};

const StyledDesignProjectInfo = styled.section`
  .bg {
    position: fixed;
    top: 0;
    left: 0;
    .black {
      background-color: #000000;
      width: 100vw;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -2;
      pointer-events: none;
    }
    .top-gradient {
      position: fixed;
      width: 100vw;
      height: 199px;
      left: 0px;
      top: 0px;
      z-index: 5;
      pointer-events: none;
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
      object-position: top;
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
      pointer-events: none;
    }
  }
  .title {
    position: relative;
    z-index: 10;
  }
  .info {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export default DesignProjectInfo;
