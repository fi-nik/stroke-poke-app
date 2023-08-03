import styled from 'styled-components/native';

import { Text } from './Text';

export const Caption = styled(Text)<{ colour?: string; bold?: boolean }>`
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme, colour }) => (colour ? colour : theme.colors.black)};
`;
