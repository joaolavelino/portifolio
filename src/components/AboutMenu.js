import React from "react";
import styled from "styled-components";
import instagram from "../img/instagram.png";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";
import telegram from "../img/telegram.png";
import whatsapp from "../img/whatsapp.png";
import email from "../img/email.png";
import { motion } from "framer-motion";
import { cardsStaggerAnimation, cardAnimation } from "../util/animation";
import avatar from "../img/avatar.png";

const AboutMenu = () => {
  return (
    <StyledContactMenu
      variants={cardsStaggerAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.img
        src={avatar}
        alt="avatar"
        className="avatar"
        variants={cardAnimation}
      />
      <motion.div
        className="rowdiv links"
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
          <button>
            <img src={telegram} alt="telegram link" />
          </button>
        </motion.a>
        <motion.a
          href="https://wa.me/5541996974001"
          target="_blank"
          rel="noreferrer"
          variants={cardAnimation}
        >
          <button>
            <img src={whatsapp} alt="whatsapp link" />
          </button>
        </motion.a>
        <motion.a
          href="mailto:joaolavelino@gmail.com"
          target="_blank"
          rel="noreferrer"
          variants={cardAnimation}
        >
          <button>
            <img src={email} alt="email link" />
          </button>
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/joão-avelino-045b37108/"
          target="_blank"
          rel="noreferrer"
          variants={cardAnimation}
        >
          <button>
            <img src={linkedin} alt="linkedin link" />
          </button>
        </motion.a>
        <motion.a
          href="https://github.com/joaolavelino/"
          target="_blank"
          rel="noreferrer"
          variants={cardAnimation}
        >
          <button>
            <img src={github} alt="github link" />
          </button>
        </motion.a>
        <motion.a
          href="https://www.instagram.com/joaoavelino.art"
          target="_blank"
          rel="noreferrer"
          variants={cardAnimation}
        >
          <button>
            <img src={instagram} alt="instagram link" />
          </button>
        </motion.a>
      </motion.div>
    </StyledContactMenu>
  );
};

const StyledContactMenu = styled(motion.section)`
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  gap: 2rem;
  margin-bottom: 2rem;
  @media screen and (min-width: 1050px) {
    border-right: 2px solid lightgray;
  }

  .avatar {
    width: 16rem;
  }

  .links {
    width: 225px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
`;

export default AboutMenu;
