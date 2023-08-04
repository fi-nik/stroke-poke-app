import { useEffect, useState } from 'react';
import { useCartNumber } from 'src/hooks/cart';

import { CartIcon } from './icons/Cart';

type Props = {
  setBadgeNumber: (number) => void;
  fill: string;
};

export function CartTab({ fill, setBadgeNumber }: Props) {
  const [current, setCurrent] = useState(0);
  const number = useCartNumber();

  useEffect(() => {
    if (current !== number) {
      setBadgeNumber(number === 0 ? null : number);
      setCurrent(number);
    }
  }, [number, current, setBadgeNumber]);

  return <CartIcon fill={fill} />;
}
