import { useEffect } from 'react';
import { useCartNumber } from 'src/hooks/cart/useCartNumber';
import styled from 'styled-components/native';

import { CartIcon } from './icons/cart';
type Props = {
  setBadgeNumber: (number) => void;
  fill: string;
};

export function CartTab({ fill, setBadgeNumber }: Props) {
  const number = useCartNumber();

  useEffect(() => {
    setBadgeNumber(number);
  }, [number]);

  console.log('number', number);
  return (
    <Wrapper>
      <CartIcon fill={fill} />
    </Wrapper>
  );
}

const Wrapper = styled.View``;
