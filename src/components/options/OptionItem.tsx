import React from "react";
import { Checkbox } from "src/components/button/Checkbox";
import { RadioButton } from "src/components/button/RadioButton";

type Props = {
  type: "radio" | "checkbox";
  onPress: (value: string) => void;
  value: string;
  label: string;
  description?: string;
  selected: boolean;
};
export function OptionItem({ type, onPress, selected, value, label }: Props) {
  return type === "radio" ? (
    <RadioButton
      onToggle={onPress}
      checked={selected}
      value={value}
      label={label}
    />
  ) : (
    <Checkbox
      checked={selected}
      onToggle={onPress}
      label={label}
      value={value}
    />
  );
}
