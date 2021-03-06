import React from "react";
import { useParams } from "react-router";
import VisualGalerySlider from "../components/VisualGalerySlider";
import { fullScreenAnimation } from "../util/animation";
import { motion } from "framer-motion";

const VisualGallery = () => {
  const { id } = useParams();
  return (
    <motion.main
      variants={fullScreenAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <VisualGalerySlider id={id} />
    </motion.main>
  );
};

export default VisualGallery;
