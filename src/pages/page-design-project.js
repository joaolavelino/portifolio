import React from "react";
import DesignProjectInfo from "../components/DesignProjectInfo";
import { motion } from "framer-motion";
import { staggerAnimation } from "../util/animation";

const DesignProject = ({ lang }) => {
  const id = "de1";
  return (
    <motion.main
      variants={staggerAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <DesignProjectInfo id={id} lang={lang} />
    </motion.main>
  );
};

export default DesignProject;
