import React from "react";
import content from "../content.json";
import styled from "styled-components";
import chevronLeft from "../img/chevronLeft.png";
import chevronRight from "../img/chevronRight.png";
import close from "../img/close.png";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const VisualGalerySlider = ({ id }) => {
  const array = content.visual.projects;
  const imagePosition = array.indexOf(id);
  console.log(imagePosition);
  const navigate = useNavigate();

  const nextImage = () => {
    imagePosition === array.length - 1
      ? navigate(`/visual/gallery/${array[0]}`)
      : navigate(`/visual/gallery/${array[imagePosition + 1]}`);
  };
  const previousImage = () => {
    imagePosition === 0
      ? navigate(`/visual/gallery/${array[array.length - 1]}`)
      : navigate(`/visual/gallery/${array[imagePosition - 1]}`);
  };

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      navigate("/visual");
    }
    if (event.key === "37") {
      previousImage();
    }
    if (event.key === "39") {
      nextImage();
    }
  });

  return (
    <StyledVisualGalerySlider>
      <div className="close">
        <img
          src={close}
          alt="close"
          className="hover-scale-link"
          onClick={() => navigate("/visual")}
          layoutId="visual-img"
        />
      </div>
      <div className="buttons">
        <img
          src={chevronLeft}
          alt="left arrow"
          onClick={previousImage}
          className="hover-scale-link"
        />
        <img
          src={chevronRight}
          alt="right arrow"
          onClick={nextImage}
          className="hover-scale-link"
        />
      </div>
      <motion.div className="project-image">
        <motion.img
          src={process.env.PUBLIC_URL + `/img/visual/${id}.png`}
          alt={id}
        />
      </motion.div>
    </StyledVisualGalerySlider>
  );
};

const StyledVisualGalerySlider = styled(motion.section``)`
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 50;
  .close {
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 30;
    img {
      width: 2rem;
    }
  }
  .buttons {
    position: fixed;
    top: 50%;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    height: 2rem;
    z-index: 15;
    img {
      height: 3rem;
      cursor: pointer;
    }
  }
  .project-image {
    position: relative;
    height: calc(100vh);
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      transition: 0.3s ease-in-out;
      object-fit: contain;
    }
    .hidden {
      transform: translateX(-3rem);
      opacity: 0;
    }
  }
`;

export default VisualGalerySlider;
