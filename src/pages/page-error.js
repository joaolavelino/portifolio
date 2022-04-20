import React from "react";
import styled from "styled-components";
import ErrorTitle from "../components/ErrorTitle";

const Error = ({ lang }) => {
  return (
    <>
      <StyledError>
        <ErrorTitle lang={lang} />
      </StyledError>
    </>
  );
};

const StyledError = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Error;
