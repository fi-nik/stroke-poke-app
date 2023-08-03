import styled from 'styled-components/native';

export const Card = styled.View`
  padding: 15px;
  border-radius: 4px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border.primary};
  background-color: ${({ theme }) => theme.colors.white};
`;
