import styled from 'styled-components/native';

import { Text } from './Text';

export const Headline = styled(Text)<{ colour?: string }>`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${({ colour, theme }) => colour || theme.colors.black};
`;
