import React, { useState } from "react";
import styled from "styled-components";
import content from "../content.json";
import { langPack } from "../util/langPack";
import NavLanguage from "./NavLanguage";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router";
import { colors } from "../GlobalStyles";

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
          className="close-button"
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
  gap: 1.5rem;
  top: 0;
  right: 1rem;
  background-color: ${colors.dark};
  padding: 1rem 1rem 1rem;
  transition: 0.2s ease-in-out;
  &.hidden {
    top: -460px;
    @media screen and (min-width: 1050) {
      top: 0;
    }
  }

  .nav-close {
    text-align: right;
    .close-button {
      font-size: 2rem;
      color: ${colors.light};
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    cursor: pointer;
    li {
      font-weight: 700;
      position: relative;
      z-index: 1;
      color: ${colors.light};
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
        background-color: ${colors.action};
      }

      .show {
        width: 100%;
      }
    }
  }

  @media screen and (min-width: 1240px) {
    position: static;
    width: auto;
    flex-direction: row;
    background-color: transparent;
    padding: 0;
    gap: 3rem;
    align-items: center;

    .nav-close {
      display: none;
    }

    ul {
      flex-direction: row;
      align-items: center;
      gap: 2rem;
      li {
        font-size: 1rem;
        text-transform: lowercase;
        transition: 0.2s;
        color: ${colors.dark};
        &:hover {
          color: ${colors.action};
        }
        .underline {
          position: absolute;
          z-index: -1;
          top: 23px;
          left: 0;
          width: 0;
          height: 3px;
          transition: 0.2s;
          background-color: ${colors.action};
        }
        .show {
          width: 100%;
        }
      }
    }
  }
`;

export default Nav;
