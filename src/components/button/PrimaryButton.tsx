import { ReactElement } from 'react';
import { TouchableHighlightProps } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

import { ButtonLabel, ButtonWrapper, RightIconWrapper } from './styled';

type Props = Omit<TouchableHighlightProps, 'onPress'> & {
  label: string;
  background?: string;
  onPress: () => void;
  RightIcon?: ReactElement;
};

export function PrimaryButton({
  label,
  onPress,
  RightIcon,
  background,
  ...buttonProps
}: Props) {
  const theme = useTheme();

  return (
    <Wrapper {...buttonProps} onPress={onPress} background={background}>
      <ButtonLabel bold colour={theme.colors.white}>
        {label}
      </ButtonLabel>
      {!!RightIcon && <RightIconWrapper>{RightIcon}</RightIconWrapper>}
    </Wrapper>
  );
}

const Wrapper = styled(ButtonWrapper)<{ background?: string }>`
  background-color: ${({ theme, background }) =>
    background || theme.colors.black};
  padding: 8px 16px;
`;
