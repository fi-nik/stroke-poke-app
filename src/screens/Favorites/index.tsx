import React from 'react';
import { FlatList } from 'react-native';
import { BowlOrderContent } from 'src/components/BowlOrderContent';
import { Card } from 'src/components/Card';
import { CardTitle } from 'src/components/CardTitle';
import { ScreenTitle } from 'src/components/ScreenTitle';
import { ScreenWrapper } from 'src/components/ScreenWrapper';
import { IconButton } from 'src/components/button/IconButton';
import { PrimaryButton } from 'src/components/button/PrimaryButton';
import { SecondaryButton } from 'src/components/button/SecondaryButton';
import { FavoriteIcon } from 'src/components/icons/favorites';
import { FlexRow } from 'src/components/layout';
import { useFavorites } from 'src/hooks/favorites/useFavorites';
import { Favorite } from 'src/types';
import styled, { useTheme } from 'styled-components/native';

export const Favorites = () => {
  const { data, addToCart, removeFavorite, editFavorite } = useFavorites();
  const theme = useTheme();
  return (
    <ScreenWrapper>
      <ScreenTitle>Favorites</ScreenTitle>
      <FlatList
        data={data}
        renderItem={({ item }: { item: Favorite }) => (
          <CardWrapper key={item.id}>
            <CardTitle
              title={item.type.name}
              price={`${item.size.currency}${item.size.price}`}
            />
            <BowlOrderContent {...item} />
            <SummaryActions>
              <EditButton label="Edit" onPress={() => editFavorite(item)} />
              <FlexRow>
                <FavoriteButton
                  type={'primary'}
                  Icon={<FavoriteIcon fill={theme.colors.white} />}
                  onPress={() => removeFavorite(item.id)}
                />
                <CartButton
                  label="Add to Cart"
                  onPress={() => addToCart(item)}
                />
              </FlexRow>
            </SummaryActions>
          </CardWrapper>
        )}
      />
    </ScreenWrapper>
  );
};
const CardWrapper = styled(Card)`
  margin-top: 15px;
`;

const FavoriteButton = styled(IconButton)`
  margin-right: 15px;
`;

const CartButton = styled(PrimaryButton)`
  flex-grow: 1;
`;

const EditButton = styled(SecondaryButton)`
  margin-bottom: 15px;
`;

const SummaryActions = styled.View`
  flex-shrink: 1;
`;
