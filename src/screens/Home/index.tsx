import React from "react";
import { View } from "react-native";
import { StepCounter } from "src/components/StepCounter";

export const Home = () => {
  return (
    <View>
      <StepCounter current={1} size={4} />
    </View>
  );
};
