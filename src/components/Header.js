import React, { useState } from "react";
import styled from "styled-components";
import Nav from "./Nav";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = ({ lang, setLang }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <StyledHeader>
      <Link to="/">
        <h1>Joao Avelino</h1>
      </Link>
      <Nav
        lang={lang}
        setLang={setLang}
        showNav={showNav}
        setShowNav={setShowNav}
      />
      <GiHamburgerMenu
        onClick={() => setShowNav(true)}
        className="mobile-icons"
      />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  height: 10rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem 5rem;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  pointer-events: none;
  @media screen and (min-width: 768px) {
    padding: 0.5rem 3rem 5rem;
  }
  @media screen and (min-width: 1050px) {
    padding: 2rem 3rem 5rem;
  }

  * {
    pointer-events: auto;
  }

  svg {
    font-size: 1.5rem;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export default Header;
