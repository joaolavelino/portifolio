import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { cardAnimation } from "../util/animation";

const VisualCard = ({ src, alt, e }) => {
  const navigate = useNavigate();

  const enterGallery = (name) => {
    console.log(name);
    navigate(`/visual/gallery/${name}`);
  };
  return (
    <StyledVisualCard
      className="hover-scale-link box-shadow"
      onClick={() => enterGallery(e)}
      variants={cardAnimation}
      layoutId="visual-img"
    >
      <motion.img src={src} alt={alt} className="visual-card-img" />
    </StyledVisualCard>
  );
};

const StyledVisualCard = styled(motion.div)`
  width: 10rem;
  height: 10rem;
  overflow: hidden;
  @media screen and (min-width: 1024px) {
    width: 12rem;
    height: 12rem;
  }
  .visual-card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export default VisualCard;
