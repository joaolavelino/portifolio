import { motion } from "framer-motion";
import styled from "styled-components";
import React from "react";
import { cardsStaggerAnimation } from "../util/animation";

const HomeAnimation = () => {
  const images = [
    "visual/franz.png",
    "projects/homescopelogo.png",
    "visual/floyd.png",
    "projects/eruditumbg.png",
    "projects/sinalogo.png",
    "visual/hop.png",
    "projects/ignitebg.png",
    "projects/devbg.png",
    "visual/frida.png",
    "projects/homescopebg.png",
    "projects/vinabikesbg.png",
    "visual/emporioavelino.png",
  ];

  return (
    <StyledHomeAnimation
      className="fullscreen"
      variants={cardsStaggerAnimation}
    >
      {images.map((e, index) => (
        <motion.img
          src={process.env.PUBLIC_URL + `/img/${e}`}
          alt="welcome panel"
          key={`welcome${index}`}
          className={`welcome${index}`}
          initial={{ opacity: 1, scale: 1, x: 0 }}
          animate={{
            opacity: 0,
            scale: 1,
            rotate: 5,
            x: 100,
            transition: {
              delay: 0.07 * index,
              duration: 0.2,
              ease: "easeInOut",
            },
          }}
        />
      ))}
    </StyledHomeAnimation>
  );
};

const StyledHomeAnimation = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  z-index: 30;
  overflow: hidden;
  pointer-events: none;

  img {
    width: 50%;
    height: 20%;
    object-fit: cover;
    object-position: center;
    pointer-events: none;
    &.welcome7,
    &.welcome9,
    &.welcome6 {
      object-position: left;
    }
    @media screen and (min-width: 640px) {
      width: calc(100% / 3);
      height: 25%;
    }
    @media screen and (min-width: 1024px) {
      width: calc(100% / 4);
      height: calc(100% / 3);
    }
  }
`;

export default HomeAnimation;
