import { ReactElement } from 'react';
import { TouchableOpacityProps, View } from 'react-native';
import styled from 'styled-components/native';

type Props = Omit<TouchableOpacityProps, 'onPress'> & {
  onPress: () => void;
  type: 'primary' | 'secondary';
  Icon?: ReactElement;
  background?: string;
};

export function IconButton({ onPress, Icon, type, ...buttonProps }: Props) {
  return (
    <Wrapper {...buttonProps} onPress={onPress} type={type}>
      <View>{Icon}</View>
    </Wrapper>
  );
}

const Wrapper = styled.TouchableOpacity<{
  type: 'primary' | 'secondary';
  background?: string;
}>`
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, type, background }) =>
    background ||
    (type === 'primary' ? theme.colors.black : theme.colors.white)};
  ${({ type, theme }) =>
    type === 'secondary'
      ? `border-width: 1px; border-color: ${theme.colors.black};`
      : ''};
  min-height: 40px;
  min-width: 40px;
`;
