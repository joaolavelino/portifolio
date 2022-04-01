import React from "react";
import MusicEmbed from "../components/MusicEmbed";
import MusicTitle from "../components/MusicTitle";
import { pageAnimation } from "../util/animation";
import { motion } from "framer-motion";

const Music = ({ lang }) => {
  return (
    <motion.main
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <MusicTitle lang={lang} />
      <MusicEmbed />
    </motion.main>
  );
};

export default Music;
