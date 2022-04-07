import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import content from "../content.json";
import { langPack } from "../util/langPack";
import webdev from "../img/webdev.png";
import design from "../img/design.png";
import visual from "../img/art.png";
import music from "../img/music.png";
import { colors } from "../GlobalStyles";
import { buttonAnimation, staggerAnimation } from "../util/animation";

const HomeFeatured = ({ lang }) => {
  const pageText = content.home;
  const text = langPack(pageText, lang);

  const featureMaker = (obj, key) => {
    let icon;
    let image;
    let link;

    if (obj.type === "webdev") {
      icon = webdev;
      image = process.env.PUBLIC_URL + `/img/projects/${obj.name}bgSmall.png`;
      link = `/webdev/project/${obj.id}`;
    }
    if (obj.type === "design") {
      icon = design;
      image = process.env.PUBLIC_URL + `/img/projects/${obj.name}bgSmall.png`;
      link = `/design/project/${obj.id}`;
    }
    if (obj.type === "visual") {
      icon = visual;
      image = process.env.PUBLIC_URL + `/img/visual/${obj.name}Small.png`;
      link = `/visual/gallery/${obj.name}`;
    }
    if (obj.type === "music") {
      icon = music;
      image = process.env.PUBLIC_URL + `/img/visual/${obj.name}Small.png`;
      link = `/music`;
    }

    return (
      <motion.article
        className={`featured-card hover-scale-link ${obj.type}`}
        key={`featured${key}`}
        variants={buttonAnimation}
      >
        <img
          src={image}
          alt="project background"
          className="featured-card-bg"
        />
        <div className="featured-card-content">
          <img src={icon} alt={obj.type} />
          <h4>{obj.name}</h4>

          <footer>
            <a href={link}>
              <button className="text">check it out!</button>
            </a>
          </footer>
        </div>
      </motion.article>
    );
  };

  return (
    <StyledHomeFeatured>
      <h3>{text.featured}</h3>
      <motion.div className="feature-list" feature={staggerAnimation}>
        {pageText.featured.map((e, index) => featureMaker(e, index))}
      </motion.div>
    </StyledHomeFeatured>
  );
};

const StyledHomeFeatured = styled(motion.section)`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  @media screen and (min-width: 768px) {
    padding: 2rem 4rem;
  }
  @media screen and (min-width: 1050px) {
    padding: 2rem 8rem;
    display: flex;
    flex-wrap: wrap;
  }

  h3 {
    margin-left: 1rem;
    margin-bottom: 1rem;
  }

  .feature-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media screen and (min-width: 1050px) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  .featured-card {
    position: relative;
    width: 100%;
    height: 195px;
    @media screen and (min-width: 1050px) {
      width: calc(50% - 1rem);
    }
  }
  .featured-card-content {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h4 {
      align-self: center;
      text-transform: uppercase;
    }

    img {
      width: 2rem;
    }
    footer {
      width: 100%;
      height: 2rem;
      display: flex;
      justify-content: flex-end;
    }
    div {
      height: calc(100% - 4rem);
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .webdev {
    background-color: ${colors.blue};
  }
  .design {
    background-color: ${colors.pink};
  }
  .visual {
    background-color: ${colors.yellow};
  }
  .music {
    background-color: ${colors.green};
  }

  .featured-card-bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.2;
    z-index: 0;
  }
`;
export default HomeFeatured;
