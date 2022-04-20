import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import content from "../content.json";
import { colors } from "../GlobalStyles";
import { staggerAnimation, stripeAnimation } from "../util/animation";
import { langPack } from "../util/langPack";

const ErrorTitle = ({ lang }) => {
  const pageText = content.error;
  const text = langPack(pageText, lang);

  const navigate = useNavigate();

  useEffect(() => {
    redirectToHome();
  });

  const redirectToHome = () => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <>
      <StyledErrorTitle>
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
            <motion.div
              className="stripe"
              variants={stripeAnimation}
            ></motion.div>
          </motion.div>
        </AnimatePresence>
        <div className="title">
          <h3>{text.title}</h3>
          <p>{text.p1}</p>
        </div>
      </StyledErrorTitle>
    </>
  );
};

const StyledErrorTitle = styled(motion.div)`
  display: flex;
  gap: 1rem;
  .stripes {
    width: 100px;
    height: 5rem;
    z-index: -10;
    .stripe {
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
  .title {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export default ErrorTitle;
