import React from "react";
import styled from "styled-components";
import about from "../img/about.png";
import webdev from "../img/webdev.png";
import design from "../img/design.png";
import art from "../img/art.png";
import music from "../img/music.png";
import { motion } from "framer-motion";
import { buttonAnimation, staggerAnimation } from "../util/animation";
import { useNavigate } from "react-router";

const HomeMenu = () => {
  const navigate = useNavigate();

  return (
    <StyledHomeMenu variants={staggerAnimation}>
      <motion.button
        variants={buttonAnimation}
        onClick={() => navigate("/about")}
      >
        <img src={about} alt="about" />
      </motion.button>
      <motion.button
        variants={buttonAnimation}
        onClick={() => navigate("/webdev")}
      >
        <img src={webdev} alt="webdev" />
      </motion.button>
      <motion.button
        variants={buttonAnimation}
        onClick={() => navigate("/design")}
      >
        <img src={design} alt="design" />
      </motion.button>
      <motion.button
        variants={buttonAnimation}
        onClick={() => navigate("/music")}
      >
        <img src={music} alt="music" />
      </motion.button>
      <motion.button
        variants={buttonAnimation}
        onClick={() => navigate("/visual")}
      >
        <img src={art} alt="art" />
      </motion.button>
    </StyledHomeMenu>
  );
};

const StyledHomeMenu = styled(motion.section)`
  width: 100%;
  padding: 2rem 5rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media screen and (max-width: 374px) {
    padding: 2rem 2rem;
  }
`;

export default HomeMenu;
