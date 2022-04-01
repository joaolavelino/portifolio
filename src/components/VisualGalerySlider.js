import React, { useState } from "react";
import content from "../content.json";
import styled from "styled-components";
import chevronLeft from "../img/chevronLeft.png";
import chevronRight from "../img/chevronRight.png";
import close from "../img/close.png";
import { useNavigate } from "react-router";

const VisualGalerySlider = ({ id }) => {
  const [show, setShow] = useState(id);
  const array = content.visual.projects;
  const imagePosition = array.indexOf(show);
  console.log(imagePosition);

  const navigate = useNavigate();

  const NextImage = () => {
    imagePosition === array.length - 1
      ? setShow(array[0])
      : setShow(array[imagePosition + 1]);
  };
  const PreviousImage = () => {
    imagePosition === 0
      ? setShow(array[array.length - 1])
      : setShow(array[imagePosition - 1]);
  };

  return (
    <StyledVisualGalerySlider>
      <div className="close">
        <img
          src={close}
          alt="close"
          className="hover-scale-link"
          onClick={() => navigate(-1)}
        />
      </div>
      <div className="buttons">
        <img
          src={chevronLeft}
          alt="left arrow"
          onClick={PreviousImage}
          className="hover-scale-link"
        />
        <img
          src={chevronRight}
          alt="right arrow"
          onClick={NextImage}
          className="hover-scale-link"
        />
      </div>
      <div className="project-image">
        {array.map((e, index) => (
          <img
            className={`slider ${e !== show ? "hidden" : ""}`}
            src={process.env.PUBLIC_URL + `/img/visual/${e}.png`}
            alt={`${show}`}
            key={`visualSlider${index}`}
          />
        ))}
      </div>
    </StyledVisualGalerySlider>
  );
};

const StyledVisualGalerySlider = styled.section`
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
