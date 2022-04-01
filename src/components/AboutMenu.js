import React from "react";
import styled from "styled-components";
import instagram from "../img/instagram.png";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";
import soundcloud from "../img/soundcloud.png";
import telegram from "../img/telegram.png";
import { motion } from "framer-motion";
import { cardsStaggerAnimation, cardAnimation } from "../util/animation";

const AboutMenu = () => {
  return (
    <StyledContactMenu
      className="rowdiv"
      variants={cardsStaggerAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.a
        href="https://t.me/joaolavelino"
        target="_blank"
        rel="noreferrer"
        variants={cardAnimation}
      >
        <img src={telegram} alt="telegram link" />
      </motion.a>
      <motion.a
        href="https://github.com/joaolavelino/"
        target="_blank"
        rel="noreferrer"
        variants={cardAnimation}
      >
        <img src={github} alt="github link" />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/joão-avelino-045b37108/"
        target="_blank"
        rel="noreferrer"
        variants={cardAnimation}
      >
        <img src={linkedin} alt="linkedin link" />
      </motion.a>
      <motion.a
        href="https://www.instagram.com/joaoavelino.art"
        target="_blank"
        rel="noreferrer"
        variants={cardAnimation}
      >
        <img src={instagram} alt="instagram link" />
      </motion.a>
      <motion.a
        href="https://soundcloud.com/joao-avelino"
        target="_blank"
        rel="noreferrer"
        variants={cardAnimation}
      >
        <img src={soundcloud} alt="soundcloud link" />
      </motion.a>
    </StyledContactMenu>
  );
};

const StyledContactMenu = styled(motion.section)`
  padding: 0 3rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 4rem;
  img {
    width: 2.5rem;
    transition: 0.2s;
    cursor: pointer;
    filter: drop-shadow(2px 2px 5px rgb(0 0 0 / 0.5));
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export default AboutMenu;
