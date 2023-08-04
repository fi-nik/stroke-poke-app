import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { Card } from 'src/components/Card';
import { ScreenTitle } from 'src/components/ScreenTitle';
import { ScreenWrapper } from 'src/components/ScreenWrapper';
import { PrimaryButton } from 'src/components/button/PrimaryButton';
import { SecondaryButton } from 'src/components/button/SecondaryButton';
import { Body } from 'src/components/text/Body';
import { Headline } from 'src/components/text/Headline';
import { useCart } from 'src/hooks/cart';
import { CartRoutes, TabRoutes } from 'src/router/types';
import { BowlData, BowlOrder } from 'src/types';
import { getCartTotal } from 'src/utils/price';
import styled, { useTheme } from 'styled-components/native';

import { CartItem } from './CardItem';
import { EmptyCart } from './EmptyCart';

export function CartScreen({ navigation }) {
  const theme = useTheme();
  const cart = useCart();

  const renderItem = useCallback(
    ({ item }: { item: BowlOrder }) => <CartItem key={item.id} item={item} />,
    [],
  );
  const navigateToHome = useCallback(
    () => navigation.navigate(TabRoutes.Home, { data: new BowlData() }),
    [navigation],
  );

  const navigateToCheckout = useCallback(() => {
    return navigation.navigate(CartRoutes.Checkout, { cart });
  }, [navigation, cart]);

  const { subtotal, currency } = getCartTotal(cart);

  return (
    <ScreenWrapper>
      <ScreenTitle>Cart</ScreenTitle>
      <FlatList
        bounces={false}
        ListEmptyComponent={EmptyCart}
        keyExtractor={item => item.id}
        data={cart}
        renderItem={renderItem}
      />
      {cart.length > 0 && (
        <CardWrapper>
          <Row>
            <Body>Subtotal</Body>
            <Headline>{currency + subtotal}</Headline>
          </Row>
          <Row>
            <Body>Delivery fee</Body>
            <Headline>{currency + 0}</Headline>
          </Row>
          <Row>
            <Headline>Total</Headline>
            <Headline colour={theme.colors.primary}>
              {currency + subtotal}
            </Headline>
          </Row>
          <OrderMoreButton label="Order More" onPress={navigateToHome} />
          <PrimaryButton
            background={theme.colors.primary}
            label="Proceed to Checkout"
            onPress={navigateToCheckout}
          />
        </CardWrapper>
      )}
    </ScreenWrapper>
  );
}

const CardWrapper = styled(Card)`
  margin-top: 15px;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const OrderMoreButton = styled(SecondaryButton)`
  margin-top: 15px;
  margin-bottom: 10px;
`;
