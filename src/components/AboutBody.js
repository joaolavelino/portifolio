import React from "react";
import styled from "styled-components";
import content from "../content.json";
import { langPack } from "../util/langPack";
import avatar from "../img/avatar.png";
import { motion } from "framer-motion";

const AboutBody = ({ lang }) => {
  const pageText = content.about;
  const text = langPack(pageText, lang);
  return (
    <StyledAboutBody className="resp-div">
      <img src={avatar} alt="avatar" />
      <div className="text">
        <p>{text.p1}</p>
        <p>{text.p2}</p>
        <p>{text.p3}</p>
      </div>
    </StyledAboutBody>
  );
};

const StyledAboutBody = styled(motion.section)`
  align-items: center;
  gap: 3rem;
  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    width: 100%;
  }
  img {
    width: 60%;
    max-width: 300px;
  }
  p {
    text-align: justify;
    padding: 0 3rem;
  }
`;

export default AboutBody;
