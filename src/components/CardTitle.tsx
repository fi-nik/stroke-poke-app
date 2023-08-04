import styled from 'styled-components/native';

import { Headline } from './text/Headline';

export const CardTitle = ({
  title,
  price,
}: {
  title: string;
  price?: string;
}) => (
  <Wrapper>
    <Headline>{title}</Headline>
    {price ? <Headline>{price}</Headline> : null}
  </Wrapper>
);

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
