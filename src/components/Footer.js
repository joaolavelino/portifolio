import React from "react";
import styled from "styled-components";
import content from "../content.json";
import { langPack } from "../util/langPack";
import { colors } from "../GlobalStyles";
import instagram from "../img/instagram.png";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";
import telegram from "../img/telegram.png";
import whatsapp from "../img/whatsapp.png";

const Footer = ({ lang }) => {
  const pageText = content.nav;
  const text = langPack(pageText, lang);
  console.log(text);

  return (
    <StyledFooter>
      <div className="footer-colors">
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <div className="footer-content">
        <div className="footer-menu">
          <h5>joaoAvelino</h5>
          <nav>
            <ul>
              <li>{text.home}</li>
              <li>{text.about}</li>
              <li>{text.webdev}</li>
              <li>{text.design}</li>
              <li>{text.visual}</li>
              <li>{text.music}</li>
            </ul>
          </nav>
        </div>
        <div className="footer-links">
          <img src={linkedin} alt="linkedin" />
          <img src={github} alt="github" />
          <img src={instagram} alt="instagram" />
          <img src={telegram} alt="telegram" />
          <img src={whatsapp} alt="whatsapp" />
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100vw;
  height: 200px;
  background-color: ${colors.dark};
  z-index: 20;
  display: flex;

  .footer-colors {
    width: 0.5rem;
    height: 100%;

    div {
      width: 100%;
      height: 20%;
      &:nth-child(1) {
        background-color: ${colors.green};
      }
      &:nth-child(2) {
        background-color: ${colors.yellow};
      }
      &:nth-child(3) {
        background-color: ${colors.blue};
      }
      &:nth-child(4) {
        background-color: ${colors.pink};
      }
      &:nth-child(5) {
        background-color: ${colors.action};
      }
    }
  }

  .footer-content {
    width: calc(100% - 0.5rem);
    display: flex;
    align-items: center;
    align-items: flex-end;
    justify-content: space-between;
    padding: 2rem;

    .footer-menu {
      h5 {
        margin-bottom: 0.5rem;
      }
      li {
        font-size: 1rem;
        font-weight: 700;
        color: ${colors.light};
      }
    }
    .footer-links {
      height: 8rem;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap-reverse;
      align-items: center;
      justify-content: flex-end;

      gap: 1rem;
      img {
        height: 1.5rem;
      }
    }
  }
`;

export default Footer;
