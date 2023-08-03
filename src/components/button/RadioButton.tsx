import { GestureResponderEvent } from 'react-native';
import { RadioCircle } from 'src/components/icons/radio-circle';
import { Body } from 'src/components/text/Body';
import { useTheme } from 'styled-components';
import styled from 'styled-components/native';

type Props = {
  checked: boolean;
  disabled?: boolean;
  onToggle: (event: GestureResponderEvent) => void;
  label: string;
  description: string;
};
export function RadioButton({
  checked,
  onToggle,
  description,
  label,
  disabled = false,
}: Props) {
  const theme = useTheme();
  return (
    <Wrapper onPress={onToggle} disabled={disabled}>
      <RadioCircle
        lineColor={theme.colors.black}
        fillColor={theme.colors.primary}
        filled={checked}
      />
      <StyledBody
        bold
        colour={checked ? theme.colors.primary : theme.colors.black}>
        {label}
      </StyledBody>
      {description && <Body>{` (${description})`}</Body>}
    </Wrapper>
  );
}

const Wrapper = styled.TouchableOpacity<{ disabled: boolean }>`
  flex-direction: row;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
const StyledBody = styled(Body)`
  margin-left: 16px;
`;
