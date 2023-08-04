import { Card } from 'src/components/Card';
import { CardTitle } from 'src/components/CardTitle';
import { Line } from 'src/components/Line';
import { RowWithPrice } from 'src/components/RowWithPrice';
import { Body } from 'src/components/text/Body';
import { Headline } from 'src/components/text/Headline';
import { Cart } from 'src/types';
import { getCartTotal } from 'src/utils/price';
import styled, { useTheme } from 'styled-components/native';

import { OrderSummaryItem } from './OrderSummaryItem';

type Props = {
  cart: Cart;
};

export function OrderSummary({ cart }: Props) {
  const theme = useTheme();

  if (cart.length === 0) {
    return null;
  }

  const { currency, subtotal } = getCartTotal(cart);

  return (
    <Card>
      <CardTitle title={'Order summary'} />
      <Summary>
        {cart.map(order => (
          <OrderSummaryItem order={order} />
        ))}
        <FreeDeliveryText>Free delivery</FreeDeliveryText>
        <SplitLine />
        <RowWithPrice>
          <Body colour={theme.colors.primary}>Total</Body>
          <Headline colour={theme.colors.primary}>
            {currency + subtotal}
          </Headline>
        </RowWithPrice>
      </Summary>
    </Card>
  );
}
const Summary = styled.View`
  margin-top: 20px;
`;

const FreeDeliveryText = styled(Body)`
  margin-top: 20px;
  width: 100%;
  text-align: right;
`;

const SplitLine = styled(Line)`
  margin-top: 20px;
  margin-bottom: 20px;
`;
