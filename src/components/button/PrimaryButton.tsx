import { ReactElement } from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import { Caption } from "../text/Caption";

type Props = {
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
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 8px 16px;
`;

const ButtonLabel = styled(Caption)`
  width: 80%;
  align-self: center;
  text-align: center;
`;

const RightIconWrapper = styled.View`
  position: absolute;
  height: 100%;
  justify-content: center;
  right: 0;
`;
