import { useCallback, useState } from 'react';
import { ScrollView } from 'react-native';
import { Card } from 'src/components/Card';
import { CardContent } from 'src/components/CardContent';
import { CardTitle } from 'src/components/CardTitle';
import { IconButton } from 'src/components/button/IconButton';
import { PrimaryButton } from 'src/components/button/PrimaryButton';
import { SecondaryButton } from 'src/components/button/SecondaryButton';
import { FavoriteIcon } from 'src/components/icons/favorites';
import { Flex, FlexRow, FlexShrink } from 'src/components/layout';
import { Body } from 'src/components/text/Body';
import { Headline } from 'src/components/text/Headline';
import { useDeleteFavorites } from 'src/hooks/favorites/useDeleteFavorites';
import { useSaveFavorite } from 'src/hooks/favorites/useSaveFavorites';
import {
  Base,
  Bowl,
  ExtraIngredient,
  Ingredient,
  Sauce,
  Size,
} from 'src/types';
import { calculatePrice } from 'src/utils/price';
import styled, { useTheme } from 'styled-components/native';

type Props = {
  type: Bowl;
  size: Size;
  base: Base;
  sauce: Sauce;
  ingredients: Ingredient[];
  extraIngredients: ExtraIngredient[];
};

export function BowlSummary({
  type,
  size,
  base,
  sauce,
  ingredients,
  extraIngredients,
}: Props) {
  const [favoriteId, setFavoriteId] = useState(null);
  const theme = useTheme();
  const saveFavorite = useSaveFavorite();
  const deleteFavorite = useDeleteFavorites();
  const addToFavorites = () => {
    if (favoriteId) {
      return deleteFavorite(favoriteId).then(() => setFavoriteId(null));
    }
    return saveFavorite({
      base,
      size,
      extraIngredients,
      ingredients,
      sauce,
      type,
    }).then(setFavoriteId);
  };
  const addToCart = useCallback(() => null, []);
  const goToCheckout = useCallback(() => null, []);
  const price = calculatePrice(size, extraIngredients);

  return (
    <Flex>
      <FlexShrink>
        <Card>
          <ScrollView bounces={false}>
            <CardTitle
              title={type.name}
              price={`${size.currency}${size.price}`}
            />
            <SummaryContent>
              <SummaryRow>
                <Body>{size.name + ' size'}</Body>
              </SummaryRow>
              <SummaryRow>
                <Body>{base.name + ' base'}</Body>
              </SummaryRow>
              <SummaryRow>
                <Body>{sauce.name + ' sauce'}</Body>
              </SummaryRow>
              <SummaryRow>
                <Body>Added ingredients:</Body>
                <IngredientList>
                  {ingredients.map(ingredient => (
                    <Body key={ingredient.id}>{ingredient.name}</Body>
                  ))}
                </IngredientList>
              </SummaryRow>
              {extraIngredients.map(extraIngredient => (
                <ExtraIngredientRow key={extraIngredient.id}>
                  <Body>{extraIngredient.name}</Body>
                  <Headline>{`${extraIngredient.currency}${extraIngredient.price}`}</Headline>
                </ExtraIngredientRow>
              ))}
            </SummaryContent>
            <RowWithPrice>
              <Body colour={theme.colors.primary}>Full price</Body>
              <Headline colour={theme.colors.primary}>
                {`${size.currency}${price}`}
              </Headline>
            </RowWithPrice>
          </ScrollView>
        </Card>
      </FlexShrink>
      <SummaryActions>
        <FlexRow>
          <FavoriteButton
            type={favoriteId ? 'primary' : 'secondary'}
            Icon={
              <FavoriteIcon
                fill={favoriteId ? theme.colors.white : theme.colors.black}
              />
            }
            onPress={addToFavorites}
          />
          <CartButton label="Add to Cart" onPress={addToCart} />
        </FlexRow>

        <CheckoutButton label="Go to checkout" onPress={goToCheckout} />
      </SummaryActions>
    </Flex>
  );
}

const RowWithPrice = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ExtraIngredientRow = styled(RowWithPrice)`
  margin-bottom: 15px;
`;

const SummaryContent = styled(CardContent)`
  padding-bottom: 5px;
  border-bottom-color: ${({ theme }) => theme.colors.border.primary};
  border-bottom-width: 1px;
`;

const SummaryRow = styled.View`
  margin-bottom: 10px;
`;

const IngredientList = styled.View`
  margin-top: 10px;
  margin-left: 15px;
`;

const FavoriteButton = styled(IconButton)`
  margin-right: 15px;
`;

const CartButton = styled(PrimaryButton)`
  flex-grow: 1;
`;
const CheckoutButton = styled(SecondaryButton)`
  margin-top: 15px;
`;

const SummaryActions = styled.View`
  flex-shrink: 1;
  margin-top: 30px;
`;
