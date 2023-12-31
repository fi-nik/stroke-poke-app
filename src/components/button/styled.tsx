import styled from 'styled-components/native';

import { Caption } from '../text/Caption';

export const ButtonWrapper = styled.TouchableOpacity`
  border-radius: 4px;
  min-height: 40px;
`;

export const RightIconWrapper = styled.View`
  position: absolute;
  height: 40px;
  justify-content: center;
  right: 15px;
`;

export const ButtonLabel = styled(Caption)`
  width: 80%;
  align-self: center;
  text-align: center;
`;
