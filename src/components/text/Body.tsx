import styled from "styled-components/native";

import { Text } from "./Text";

export const Body = styled(Text)<{ bold?: boolean; colour?: string }>`
  font-weight: ${({ bold = false }) => (bold ? 700 : 400)};
  font-size: 16px;
  line-height: 24px;
  color: ${({ colour, theme }) => (colour ? colour : theme.colors.black)};
`;
