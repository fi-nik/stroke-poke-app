import { Headline } from 'src/components/text/Headline';
import styled from 'styled-components/native';
export const CardTitle = ({ title, price }) => (
  <Wrapper>
    <Headline>{title}</Headline>
    {price && <Headline>{price}</Headline>}
  </Wrapper>
);

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
