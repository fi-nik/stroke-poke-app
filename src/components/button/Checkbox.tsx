import { useCallback } from "react";
import { CheckboxIcon } from "src/components/icons/checkbox";
import { Body } from "src/components/text/Body";
import { useTheme } from "styled-components";
import styled from "styled-components/native";

type Props = {
  checked: boolean;
  onToggle: (value: string) => void;
  label: string;
  value: string;
};
export function Checkbox({ checked, onToggle, label, value }: Props) {
  const theme = useTheme();
  const onPress = useCallback(() => onToggle(value), [onToggle, value]);
  return (
    <Wrapper onPress={onPress}>
      <CheckboxIcon checked={checked} />
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
  margin-left: 8px;
`;
