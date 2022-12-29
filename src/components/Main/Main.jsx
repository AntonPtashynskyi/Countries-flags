import React from "react";
import { WrapperMain } from "./StyledMain";
import { StyledContainer } from "../Container/Container";

export const Main = ({ children }) => {
  return (
    <WrapperMain>
      <StyledContainer>{children}</StyledContainer>
    </WrapperMain>
  );
};
