import React from "react";
import { ScreenWrapper } from "src/components/ScreenWrapper";
import { StepCounter } from "src/components/StepCounter";

export const Home = () => {
  return (
    <ScreenWrapper>
      <StepCounter current={0} size={4} />
    </ScreenWrapper>
  );
};
