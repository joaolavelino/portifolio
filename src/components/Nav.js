import React, { useState } from "react";
import styled from "styled-components";
import content from "../content.json";
import { langPack } from "../util/langPack";
import NavLanguage from "./NavLanguage";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router";

const Nav = ({ lang, setLang, showNav, setShowNav }) => {
  const pageText = content.nav;
  const text = langPack(pageText, lang);

  const navigate = useNavigate();

  const navigation = (target) => {
    navigate(`/${target}`);
    setShowNav(false);
  };

  const [hover, setHover] = useState("");

  return (
    <StyledNav className={`${showNav ? "show" : "hidden"}`}>
      <div className="nav-close">
        <AiOutlineClose
          onClick={() => setShowNav(false)}
          className="mobile-icons"
        />
      </div>
      <ul>
        <li
          onClick={() => navigation("")}
          onMouseEnter={() => setHover("home")}
          onMouseLeave={() => setHover("")}
        >
          {text.home}{" "}
          <div className={`underline ${hover === "home" ? "show" : ""}`} />
        </li>
        <li
          onClick={() => navigation("about")}
          onMouseEnter={() => setHover("about")}
          onMouseLeave={() => setHover("")}
        >
          {text.about}
          <div className={`underline ${hover === "about" ? "show" : ""}`} />
        </li>
        <li
          onClick={() => navigation("webdev")}
          onMouseEnter={() => setHover("webdev")}
          onMouseLeave={() => setHover("")}
        >
          {text.dev}{" "}
          <div className={`underline ${hover === "webdev" ? "show" : ""}`} />
        </li>
        <li
          onClick={() => navigation("visual")}
          onMouseEnter={() => setHover("visual")}
          onMouseLeave={() => setHover("")}
        >
          {text.visual}{" "}
          <div className={`underline ${hover === "visual" ? "show" : ""}`} />
        </li>
        <li
          onClick={() => navigation("design")}
          onMouseEnter={() => setHover("design")}
          onMouseLeave={() => setHover("")}
        >
          {text.design}{" "}
          <div className={`underline ${hover === "design" ? "show" : ""}`} />
        </li>
        <li
          onClick={() => navigation("music")}
          onMouseEnter={() => setHover("music")}
          onMouseLeave={() => setHover("")}
        >
          {text.music}
          <div className={`underline ${hover === "music" ? "show" : ""}`} />
        </li>
      </ul>
      <NavLanguage setLang={setLang} />
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: fixed;
  z-index: 20;
  display: flex;
  width: 15rem;
  flex-direction: column;
  gap: 2rem;
  top: 0;
  right: 1rem;
  background-color: black;
  padding: 2rem 1rem 1rem;
  transition: 0.2s ease-in-out;
  &.hidden {
    top: -460px;
    @media screen and (min-width: 1050) {
      top: 0;
    }
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    cursor: pointer;
    li {
      text-transform: uppercase;
      position: relative;
      z-index: 1;
      &:hover {
        color: black;
      }

      .underline {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        transition: 0.2s;
        background-color: orange;
      }

      .show {
        width: 100%;
      }
    }
  }
  .nav-close {
    text-align: right;
  }
  svg {
    font-size: 2rem;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }

  @media screen and (min-width: 1050px) {
    position: static;
    width: auto;
    flex-direction: row;
    background-color: transparent;
    padding: 0;
    gap: 3rem;
    align-items: center;

    ul {
      flex-direction: row;
      align-items: center;
      gap: 2rem;
      li {
        font-size: 1rem;
        transition: 0.2s;
        &:hover {
          transform: scale(1.1);
          color: white;
        }
        .underline {
          position: absolute;
          z-index: -1;
          top: 23px;
          left: 0;
          width: 0;
          height: 3px;
          transition: 0.2s;
          background-color: orange;
        }
        .show {
          width: 100%;
        }
      }
    }
  }
`;

export default Nav;
