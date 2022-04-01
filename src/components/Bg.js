import React, { useEffect, useState } from "react";
import artBg from "../img/artbg.png";
import devBg from "../img/devbg.png";
import musicBg from "../img/musicbg.png";
import styled from "styled-components";

const Bg = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      number < 2 ? setNumber(number + 1) : setNumber(0);
    }, 10000);
  }, [number]);

  return (
    <StyledBg className="bg">
      <div className="bg-gradient" />
      <div className="bg-image">
        <img
          src={devBg}
          className={`dev ${number === 0 ? "show" : ""}`}
          alt="dev background"
        />
        <img
          src={musicBg}
          className={`music ${number === 1 ? "show" : ""}`}
          alt="art background"
        />
        <img
          src={artBg}
          className={`art ${number === 2 ? "show" : ""}`}
          alt="art background"
        />
      </div>
    </StyledBg>
  );
};

const StyledBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: -10;
  overflow: hidden;
  background: linear-gradient(90deg, #4b2a4b 3.97%, #612828 100%);

  .bg-image {
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: 1.5s;
      object-fit: cover;
      &.show {
        opacity: 0.05;
      }
      &.music {
        object-fit: cover;
        object-position: 75% 0;
      }
      &.music {
        object-fit: cover;
        object-position: 75% 0;
      }
      &.dev {
        object-fit: cover;
        object-position: left 0;
      }
    }
  }
`;

export default Bg;
