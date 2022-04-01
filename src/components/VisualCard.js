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
    >
      <img src={src} alt={alt} />
    </StyledVisualCard>
  );
};

const StyledVisualCard = styled(motion.div)`
  width: 10rem;
  height: 10rem;
  overflow: hidden;
  @media screen and (min-width: 1024px) {
    width: 20rem;
    height: 20rem;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: 0.3s;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export default VisualCard;
