import React from "react";
import styled from "styled-components";
import about from "../img/about.png";
import webdev from "../img/webdev.png";
import design from "../img/design.png";
import art from "../img/art.png";
import music from "../img/music.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { enlarge } from "../util/animation";

const HomeMenu = () => {
  return (
    <StyledAside variants={enlarge} initial="hidden" animate="show" exit="exit">
      <Link to="/about">
        <img src={about} alt="about link" />
      </Link>
      <Link to="/webdev">
        <img src={webdev} alt="webdev link" />
      </Link>
      <Link to="/music">
        <img src={music} alt="music link" />
      </Link>
      <Link to="/design">
        <img src={design} alt="design link" />
      </Link>
      <Link to="/visual">
        <img src={art} alt="art link" />
      </Link>
    </StyledAside>
  );
};

const StyledAside = styled(motion.aside)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding: 1rem 1rem;
  border-radius: 1rem;
  background-color: orange;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(4px 4px 10px rgb(0 0 0 / 0.7));
  @media screen and (min-width: 768px) {
    flex-direction: column;
    gap: 4rem;
    padding: 2rem 1rem;
    align-items: center;
  }

  img {
    width: 3rem;
    transition: 0.2s;
    filter: drop-shadow(4px 4px 10px rgb(0 0 0 / 0.7));
    &:hover {
      transform: scale(1.2);
    }
    @media screen and (max-width: 767px) {
      width: 3rem;
    }
  }
`;

export default HomeMenu;
