import React from "react";
import styled from "styled-components";
import en from "../img/en.png";
import pt from "../img/pt.png";

const NavLanguage = ({ setLang }) => {
  return (
    <StyledNavLanguage className="flags">
      <img src={pt} alt="portuguese" onClick={() => setLang("pt")} />
      <img src={en} alt="english" onClick={() => setLang("en")} />
    </StyledNavLanguage>
  );
};

const StyledNavLanguage = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 1.5rem;
  @media screen and (min-width: 1050px) {
    position: fixed;
    top: 1rem;
    right: 1rem;
    width: auto;
    gap: 1rem;
  }
  img {
    height: 1.5rem;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      transform: scale(1.2);
    }
    @media screen and (min-width: 1050px) {
      height: 1rem;
    }
  }
`;

export default NavLanguage;
