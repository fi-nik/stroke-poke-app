import { Caption } from 'src/components/text/Caption';
import styled from 'styled-components/native';

export const ButtonWrapper = styled.TouchableHighlight`
  flex: 1;
  border-radius: 4px;
  min-height: 40px;
`;

export const RightIconWrapper = styled.View`
  position: absolute;
  height: 100%;
  justify-content: center;
  right: 0;
`;

export const ButtonLabel = styled(Caption)`
  width: 80%;
  align-self: center;
  text-align: center;
`;
