import { ReactElement } from 'react';
import {
  ButtonLabel,
  ButtonWrapper,
  RightIconWrapper,
} from 'src/components/button/styled';
import styled from 'styled-components/native';

type Props = {
  label: string;
  onPress: () => void;
  RightIcon?: ReactElement;
};
export function SecondaryButton({
  label,
  onPress,
  RightIcon,
  ...buttonProps
}: Props) {
  return (
    <Wrapper {...buttonProps} onPress={onPress}>
      <ButtonLabel bold>{label}</ButtonLabel>
      {!!RightIcon && <RightIconWrapper>{RightIcon}</RightIconWrapper>}
    </Wrapper>
  );
}

const Wrapper = styled(ButtonWrapper)`
  background-color: ${({ theme }) => theme.colors.white};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.black};
  padding: 8px 16px;
`;
