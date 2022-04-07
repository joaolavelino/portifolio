import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import content from "../content.json";
import { colors } from "../GlobalStyles";
import { staggerAnimation, stripeAnimation } from "../util/animation";
import { langPack } from "../util/langPack";

const HomeTitle = ({ lang }) => {
  const pageText = content.home;
  const text = langPack(pageText, lang);

  return (
    <StyledHomeTitle>
      <AnimatePresence>
        <motion.div className="stripes" variants={staggerAnimation}>
          <motion.div
            className="stripe"
            variants={stripeAnimation}
          ></motion.div>
          <motion.div
            className="stripe"
            variants={stripeAnimation}
          ></motion.div>
          <motion.div
            className="stripe"
            variants={stripeAnimation}
          ></motion.div>
          <motion.div
            className="stripe"
            variants={stripeAnimation}
          ></motion.div>
        </motion.div>
      </AnimatePresence>
      <motion.div className="text">
        <h2>{text.h1}</h2>
        <h2>{text.h2}</h2>
        <h2>{text.h3}</h2>
        <h2>{text.h4}</h2>
      </motion.div>
    </StyledHomeTitle>
  );
};

const StyledHomeTitle = styled(motion.section)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 7rem);
  position: relative;
  padding: 0;
  @media screen and (min-width: 1050px) {
    height: calc(100vh - 20rem);
  }

  .stripes {
    position: absolute;
    top: 20%;
    left: 0px;
    width: 100vw;
    height: 268px;
    z-index: -10;
    @media screen and (min-width: 425px) {
      height: 354px;
    }
    .stripe {
      width: 100%;
      height: 67px;
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
      @media screen and (min-width: 425px) {
        height: 90px;
      }
    }
  }

  .text {
    position: absolute;
    top: 20%;
    left: 0;
    width: 100%;
    height: 268px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 1rem;
    @media screen and (min-width: 425px) {
      height: 354px;
    }
  }
  h2 {
    line-height: 88%;
    color: ${colors.light};
  }
`;

export default HomeTitle;
