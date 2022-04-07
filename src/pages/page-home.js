import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import HomeAnimation from "../components/HomeAnimation";
import HomeFeatured from "../components/HomeFeatured";
import HomeMenu from "../components/HomeMenu";
import HomeTitle from "../components/HomeTitle";
import { staggerAnimation } from "../util/animation";

const Home = ({ lang }) => {
  return (
    <>
      <StyledHome
        variants={staggerAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <HomeTitle lang={lang} />
        <div className="break" />
        <HomeMenu />
        <div className="break" />
        <HomeFeatured lang={lang} />
      </StyledHome>
    </>
  );
};

const StyledHome = styled(motion.main)``;

export default Home;
