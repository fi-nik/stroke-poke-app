import { useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { ScrollView } from 'react-native';
import { Card } from 'src/components/Card';
import { CardContent } from 'src/components/CardContent';
import { CardTitle } from 'src/components/CardTitle';
import { RowWithPrice } from 'src/components/RowWithPrice';
import { IconButton } from 'src/components/button/IconButton';
import { PrimaryButton } from 'src/components/button/PrimaryButton';
import { SecondaryButton } from 'src/components/button/SecondaryButton';
import { FavoriteIcon } from 'src/components/icons/Favorites';
import { Flex, FlexRow, FlexShrink } from 'src/components/layout';
import { Body } from 'src/components/text/Body';
import { Headline } from 'src/components/text/Headline';
import { useFavorite, useFavoriteActions } from 'src/hooks/favorites';
import {
  CartRoutes,
  TabRoutes,
  TabScreenNavigationProp,
} from 'src/router/types';
import { BowlData } from 'src/types';
import { calculatePrice } from 'src/utils/price';
import styled, { useTheme } from 'styled-components/native';

type Props = {
  bowlData: BowlData;
};

export function BowlSummary({ bowlData }: Props) {
  const { type, size, base, sauce, ingredients, extraIngredients } = bowlData;
  const navigation = useNavigation<TabScreenNavigationProp<TabRoutes.Home>>();
  const [favoriteId, setFavoriteId] = useState(null);
  const theme = useTheme();
  const actions = useFavoriteActions();
  const favorite = useFavorite(favoriteId);

  const addToFavorites = () => {
    if (favorite) {
      actions.removeFavorite(favorite.id);
      setFavoriteId(null);
    } else {
      const favoriteId = actions.addFavorite(bowlData, true);
      setFavoriteId(favoriteId);
    }
  };

  const addToCart = useCallback(() => {
    actions.addToCart(bowlData);
    navigation.navigate(TabRoutes.Home, { data: new BowlData() });
  }, [navigation, actions, bowlData]);

  const goToCheckout = useCallback(
    () => navigation.navigate(TabRoutes.Cart, { screen: CartRoutes.Checkout }),
    [navigation],
  );
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
