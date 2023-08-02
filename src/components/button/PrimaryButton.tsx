import { ReactElement } from 'react';
import { TouchableHighlightProps, View } from 'react-native';
import styled from 'styled-components/native';

import { Caption } from '../text/Caption';

type Props = Omit<TouchableHighlightProps, 'onPress'> & {
  label: string;
  onPress: () => void;
  RightIcon?: () => ReactElement;
};

export function PrimaryButton({
  label,
  onPress,
  RightIcon,
  ...buttonProps
}: Props) {
  return (
    <Wrapper {...buttonProps} onPress={onPress}>
      <View>
        <ButtonLabel>{label}</ButtonLabel>
        {RightIcon && (
          <RightIconWrapper>
            <RightIcon />
          </RightIconWrapper>
        )}
      </View>
    </Wrapper>
  );
}

const Wrapper = styled.TouchableHighlight`
  flex: 1;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 8px 16px;
  min-height: 40px;
`;

const ButtonLabel = styled(Caption)`
  width: 80%;
  align-self: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

const RightIconWrapper = styled.View`
  position: absolute;
  height: 100%;
  justify-content: center;
  right: 0;
`;
