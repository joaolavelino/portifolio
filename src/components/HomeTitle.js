import React from "react";
import styled from "styled-components";
import content from "../content.json";
import { langPack } from "../util/langPack";

const HomeTitle = ({ lang }) => {
  const pageText = content.home;
  const text = langPack(pageText, lang);

  return (
    <StyledHomeTitle>
      <h2>{text.title}</h2>
      <h3>{text.tag}</h3>
      <h4>{text.end}</h4>
    </StyledHomeTitle>
  );
};

const StyledHomeTitle = styled.section`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 4rem - 4rem);
  gap: 2rem;
`;

export default HomeTitle;
