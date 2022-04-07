import React, { useState } from "react";
import content from "../content.json";
import { langPack } from "../util/langPack";
import styled from "styled-components";
import { useParams } from "react-router";
import DesignFullScreen from "./DesignFullScreen";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import {
  projectCardAnimation,
  reverseStaggerAnimation,
} from "../util/animation";
import { BiZoomIn } from "react-icons/bi";
import { colors } from "../GlobalStyles";

const DesignProjectInfo = ({ lang }) => {
  const { id } = useParams();
  const project = content.design.projects.filter((e) => e.id === id)[0];
  const text = langPack(project, lang);
  console.log(text);

  const [fullScreen, setFullScreen] = useState(false);

  return (
    <StyledDesignProjectInfo variants={reverseStaggerAnimation}>
      <AnimatePresence>
        {fullScreen && (
          <DesignFullScreen
            setFullScreen={setFullScreen}
            image={process.env.PUBLIC_URL + `/img/projects/${project.bg}.png`}
            key="fullscreen"
          />
        )}
      </AnimatePresence>
      <motion.div className="image" variants={projectCardAnimation}>
        <motion.img
          src={process.env.PUBLIC_URL + `/img/projects/${project.bg}.png`}
          alt="project screenshot"
          layoutId="design-img"
        />
        <div className="links">
          <button className="small" onClick={() => setFullScreen(true)}>
            <BiZoomIn />
          </button>
        </div>
      </motion.div>
      <motion.div className="content" variants={projectCardAnimation}>
        <h3 id="project-title">{project.title}</h3>
        <p>{text.description}</p>
      </motion.div>
    </StyledDesignProjectInfo>
  );
};

const StyledDesignProjectInfo = styled(motion.section)`
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

    img {
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

      button {
        svg {
          color: white;
          font-size: 2rem;
        }
      }
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
`;

export default DesignProjectInfo;
