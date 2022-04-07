import React, { useState } from "react";
import styled from "styled-components";
import Nav from "./Nav";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { colors } from "../GlobalStyles";

const Header = ({ lang, setLang }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <StyledHeader>
        <Link to="/">
          <h1>joaoAvelino</h1>
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
    </>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100vw;
  height: 3rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  background: ${colors.light};
  pointer-events: none;
  border-bottom: 2px solid lightgray;
  @media screen and (min-width: 1240px) {
    .mobile-icons {
      display: none;
    }
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
