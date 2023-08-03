import { ReactElement } from 'react';
import { TouchableHighlightProps, View } from 'react-native';
import {ButtonLabel, ButtonWrapper, RightIconWrapper} from 'src/components/button/styled';
import styled, { useTheme } from 'styled-components/native';

type Props = Omit<TouchableHighlightProps, 'onPress'> & {
  label: string;
  onPress: () => void;
  RightIcon?: ReactElement;
};

export function PrimaryButton({
  label,
  onPress,
  RightIcon,
  ...buttonProps
}: Props) {
  const theme = useTheme();

  return (
    <Wrapper {...buttonProps} onPress={onPress}>
      <View>
        <ButtonLabel colour={theme.colors.white}>{label}</ButtonLabel>
        {!!RightIcon && <RightIconWrapper>{RightIcon}</RightIconWrapper>}
      </View>
    </Wrapper>
  );
}

const Wrapper = styled(ButtonWrapper)`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 8px 16px;
`;
