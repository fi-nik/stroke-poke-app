import React from "react";
import { FlatList } from "react-native";
import { Card } from "src/components/Card";
import { RadioButton } from "src/components/button/RadioButton";
import { Body } from "src/components/text/Body";
import { Headline } from "src/components/text/Headline";
import styled from "styled-components/native";

export function StepOne({ setSelectedOption, selectedOption, options }) {
  return (
    <Card>
      <CardTitle>Make your own poke bowl</CardTitle>
      <Body>
        Select the type of bowl your’d like, the size, add the base, sauce and
        all the added ingredients. We’ll take care of the rest!
      </Body>
      <BowlOptions>
        <FlatList
          data={options}
          renderItem={({ item: option, index }) => (
            <RadioButtonWrapper addSeparator={index < options.length - 1}>
              <RadioButton
                onToggle={setSelectedOption}
                checked={selectedOption === option}
                value={option}
                label={option}
              />
            </RadioButtonWrapper>
          )}
        />
      </BowlOptions>
    </Card>
  );
}

const CardTitle = styled(Headline)`
  margin-bottom: 8px;
`;
const RadioButtonWrapper = styled.View<{ addSeparator: boolean }>`
  margin-bottom: ${({ addSeparator }) => (addSeparator ? 16 : 0)}px;
`;

const BowlOptions = styled.View`
  padding-top: 24px;
`;
