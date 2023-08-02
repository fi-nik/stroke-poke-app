import { useState } from 'react';
import { Body } from 'src/components/text/Body';
import styled from 'styled-components/native';

export function StepCounter({ current, size }) {
  const [steps] = useState(
    new Array(size).fill(current).map((_, index) => index),
  );
  return (
    <Wrapper>
      <Body bold={true}>
        {`Step ${current + 1}`}
        <Body>{` of ${size}`}</Body>
      </Body>
      <LineContainer>
        {steps.map(step => (
          <Line key={step} filled={step <= current} width={100 / size} />
        ))}
      </LineContainer>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  width: 100%;
  margin-bottom: 40px;
`;

const LineContainer = styled.View`
  flex-direction: row;
  margin-top: 4px;
  align-items: flex-end;
`;

const Line = styled.View<{ filled: boolean; width: number }>`
  height: ${({ filled }) => (filled ? 2 : 1)}px;
  width: ${({ width }) => width}%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  opacity: ${({ filled }) => (filled ? 1 : 0.2)};
`;
