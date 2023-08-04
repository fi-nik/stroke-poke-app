import { View } from 'react-native';
import { FlexRow } from 'src/components/layout';
import { Body } from 'src/components/text/Body';
import { BowlOrder } from 'src/types';
import { formatPrice } from 'src/utils/price';
import styled from 'styled-components/native';
export function OrderSummaryItem({ order }: { order: BowlOrder }) {
  return (
    <View key={order.id}>
      <FlexRow>
        <ContentArea>
          <Body>{order.type.name}</Body>
        </ContentArea>
        <QuantityArea>
          <Body>{`x${order.count}`}</Body>
        </QuantityArea>
        <PriceArea>
          <Body>{`${order.size.currency}${formatPrice(
            order.count * order.size.price,
          )}`}</Body>
        </PriceArea>
      </FlexRow>
      <ExtraIngredientsArea>
        <Body>With:</Body>
        {order.extraIngredients.map(ingredient => (
          <FlexRow key={ingredient.id}>
            <IngredientName>{ingredient.name}</IngredientName>
            <PriceArea>
              <Body>{ingredient.currency + ingredient.price}</Body>
            </PriceArea>
          </FlexRow>
        ))}
      </ExtraIngredientsArea>
    </View>
  );
}

const ContentArea = styled.View`
  width: 50%;
`;

const QuantityArea = styled.View`
  width: 30%;
  align-items: center;
`;

const PriceArea = styled.View`
  width: 20%;
  align-items: flex-end;
`;

const ExtraIngredientsArea = styled.View`
  margin-left: 20px;
`;

const IngredientName = styled(Body)`
  flex-grow: 1;
`;
