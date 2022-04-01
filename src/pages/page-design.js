import React from "react";
import DesignTitle from "../components/DesignTitle";
import { pageAnimation } from "../util/animation";
import { motion } from "framer-motion";

const Design = ({ lang }) => {
  return (
    <motion.main
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <DesignTitle lang={lang} />
    </motion.main>
  );
};

export default Design;
