import React, { useMemo, useState } from "react";
import { View } from "react-native";
import { Card } from "src/components/Card";
import { PrimaryButton } from "src/components/button/PrimaryButton";
import { ArrowRight } from "src/components/icons/arrow-right";
import { Options } from "src/components/options/Options";
import styled from "styled-components/native";

type Props = {
  onConfirm: (value: OptionValue) => void;
  options: Option[];
};
const pokeKey = "poke";

export function StepOne({ onConfirm, options }: Props) {
  const [selectedOptions, setSelectedOptions] = useState({});
  const data = useMemo(
    () => [
      {
        key: pokeKey,
        title: "Make your own poke bowl",
        multiselect: false,
        data: options,
        description:
          "Select the type of bowl your’d like, the size, add the base sauce and all the added ingredients. We’ll take care of the rest!",
      },
    ],
    [options],
  );
  return (
    <View>
      <Card>
        <Options
          options={data}
          selectedOptions={selectedOptions}
          onChange={(key, value) => setSelectedOptions({ [key]: value })}
        />
      </Card>
      <NextButton
        onPress={() => onConfirm(selectedOptions[pokeKey])}
        label="Next"
        RightIcon={ArrowRight}
      />
    </View>
  );
}

const NextButton = styled(PrimaryButton)`
  margin-top: 40px;
`;
