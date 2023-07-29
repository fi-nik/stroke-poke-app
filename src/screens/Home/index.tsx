import React, { useState } from "react";
import { StepOne } from "screens/Home/steps/StepOne";
import { ScreenWrapper } from "src/components/ScreenWrapper";
import { StepCounter } from "src/components/StepCounter";
import { PrimaryButton } from "src/components/button/PrimaryButton";
import { ArrowRight } from "src/components/icons/arrow-right";
import styled from "styled-components/native";

const options = ["Chicken", "Salmon", "Tuna", "Vegan"];

export const Home = () => {
  const [selectedOption, setSelectedOption] = useState({});

  return (
    <ScreenWrapper>
      <StepCounter current={0} size={4} />
      <StepOne
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        options={options}
      />
      <NextButton onPress={() => null} label="Next" RightIcon={ArrowRight} />
    </ScreenWrapper>
  );
};

const NextButton = styled(PrimaryButton)`
  margin-top: 40px;
`;
