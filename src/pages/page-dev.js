import React from "react";
import WebDevTitle from "../components/WebDevTitle";
import { pageAnimation } from "../util/animation";
import { motion } from "framer-motion";

const WebDev = ({ lang }) => {
  console.log(lang);
  return (
    <motion.main
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <WebDevTitle lang={lang} />
    </motion.main>
  );
};

export default WebDev;
