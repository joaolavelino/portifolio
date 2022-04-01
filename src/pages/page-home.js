import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import HomeAnimation from "../components/HomeAnimation";
import HomeMenu from "../components/HomeMenu";
import HomeTitle from "../components/HomeTitle";
import { pageAnimation } from "../util/animation";

const Home = ({ lang }) => {
  return (
    <>
      <HomeAnimation />
      <StyledHome
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="col-div">
          <HomeTitle lang={lang} />
          <HomeMenu />
        </div>
      </StyledHome>
    </>
  );
};

const StyledHome = styled(motion.main)`
  .col-div {
    width: 100%;
    gap: 4rem;
    justify-content: center;
    @media screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      gap: 8rem;
    }
  }
`;

export default Home;
