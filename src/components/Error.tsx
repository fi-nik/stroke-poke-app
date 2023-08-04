import styled from 'styled-components/native';

import { Caption } from './text/Caption';

export const Error = props => (
  <ErrorMessage>
    *<ErrorMessage {...props} />
  </ErrorMessage>
);

const ErrorMessage = styled(Caption)`
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.primary};
`;
