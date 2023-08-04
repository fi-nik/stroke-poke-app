import { GestureResponderEvent } from 'react-native';
import { useTheme } from 'styled-components';
import styled from 'styled-components/native';

import { RadioCircleIcon } from '../icons/RadioCircle';
import { Body } from '../text/Body';

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
      <RadioCircleIcon
        lineColor={theme.colors.black}
        fillColor={theme.colors.primary}
        filled={checked}
      />
      <Label bold colour={checked ? theme.colors.primary : theme.colors.black}>
        {label}
      </Label>
      {description ? <Body>{` (${description})`}</Body> : null}
    </Wrapper>
  );
}

const Wrapper = styled.TouchableOpacity<{ disabled: boolean }>`
  flex-direction: row;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const Label = styled(Body)`
  margin-left: 16px;
`;
