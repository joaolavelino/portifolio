import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import close from "../img/close.png";

const DesignFullScreen = ({ image, setFullScreen }) => {
  return (
    <StyledDesignFullScreen>
      <img
        src={close}
        alt="close"
        onClick={() => setFullScreen(false)}
        className="close hover-scale-link"
      ></img>
      <motion.img
        src={image}
        alt="full size"
        className="image"
        layoutId="design-img"
      />
    </StyledDesignFullScreen>
  );
};

const StyledDesignFullScreen = styled(motion.section)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  display: flex;
  align-items: center;
  z-index: 30;
  overflow: hidden;

  .close {
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 30;
    width: 2rem;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export default DesignFullScreen;
