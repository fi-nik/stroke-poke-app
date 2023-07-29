import styled from "styled-components/native";

import { Text } from "./Text";

export const Body = styled(Text)<{ bold?: boolean }>`
  font-weight: ${({ bold = false }) => (bold ? 600 : 400)};
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, ${({ bold = false }) => (bold ? 1 : 0.5)});
`;
