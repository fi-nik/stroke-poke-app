import { GestureResponderEvent } from 'react-native';
import { useTheme } from 'styled-components';
import styled from 'styled-components/native';

import { CheckboxIcon } from '../icons/Checkbox';
import { Body } from '../text/Body';

type Props = {
  checked: boolean;
  disabled?: boolean;
  onToggle: (event: GestureResponderEvent) => void;
  label: string;
};
export function Checkbox({
  checked,
  onToggle,
  label,
  disabled = false,
}: Props) {
  const theme = useTheme();
  return (
    <Wrapper onPress={onToggle} disabled={disabled}>
      <CheckboxIcon checked={checked} />
      <StyledBody
        bold
        colour={checked ? theme.colors.primary : theme.colors.black}>
        {label}
      </StyledBody>
    </Wrapper>
  );
}

const Wrapper = styled.TouchableOpacity<{ disabled: boolean }>`
  flex-direction: row;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const StyledBody = styled(Body)`
  margin-left: 8px;
`;
