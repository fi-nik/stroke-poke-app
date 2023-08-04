import styled from 'styled-components/native';

export const Line = styled.View`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.border.primary};
`;
