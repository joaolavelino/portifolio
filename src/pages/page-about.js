import React from "react";
import AboutBody from "../components/AboutBody";
import AboutMenu from "../components/AboutMenu";
import { motion } from "framer-motion";
import { pageAnimation } from "../util/animation";

const About = ({ lang }) => {
  return (
    <motion.main
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutMenu />
      <AboutBody lang={lang} />
    </motion.main>
  );
};

export default About;
