import React from "react";
import VisualTitle from "../components/VisualTitle";
import { motion } from "framer-motion";
import { pageAnimation } from "../util/animation";

const Visual = ({ lang }) => {
  return (
    <motion.main
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <VisualTitle lang={lang} />
    </motion.main>
  );
};

export default Visual;
