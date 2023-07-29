import { useCallback } from "react";
import { RadioCircle } from "src/components/icons/radio-circle";
import { Body } from "src/components/text/Body";
import { useTheme } from "styled-components";
import styled from "styled-components/native";

type Props = {
  checked: boolean;
  onToggle: (value: string) => void;
  label: string;
  value: string;
};
export function RadioButton({ checked, onToggle, label, value }: Props) {
  const theme = useTheme();
  const onPress = useCallback(() => onToggle(value), [onToggle, value]);
  return (
    <Wrapper onPress={onPress}>
      <RadioCircle
        lineColor={theme.colors.black}
        fillColor={theme.colors.primary}
        filled={checked}
      />
      <StyledBody
        bold
        colour={checked ? theme.colors.primary : theme.colors.black}
      >
        {label}
      </StyledBody>
    </Wrapper>
  );
}

const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
`;
const StyledBody = styled(Body)`
  margin-left: 16px;
`;
