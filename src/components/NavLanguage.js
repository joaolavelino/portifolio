import React from "react";
import styled from "styled-components";
import { colors } from "../GlobalStyles";
import en from "../img/en.png";
import pt from "../img/pt.png";

const NavLanguage = ({ setLang }) => {
  return (
    <StyledNavLanguage className="flags">
      <p className="hover-scale-link" onClick={() => setLang("pt")}>
        PT
      </p>
      <p className="hover-scale-link" onClick={() => setLang("en")}>
        EN
      </p>
    </StyledNavLanguage>
  );
};

const StyledNavLanguage = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 1.5rem;
  color: ${colors.light};
  @media screen and (min-width: 1240px) {
    width: auto;
    gap: 1rem;
    color: ${colors.dark};
  }
  img {
    height: 1.5rem;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      transform: scale(1.2);
    }
    @media screen and (min-width: 1240px) {
      height: 1rem;
    }
  }
  p {
    font-size: 1rem;
    font-weight: 900;
  }
`;

export default NavLanguage;
