import React, { memo } from 'react';
import { BowlOrderContent } from 'src/components/BowlOrderContent';
import { Card } from 'src/components/Card';
import { CardTitle } from 'src/components/CardTitle';
import { IconButton } from 'src/components/button/IconButton';
import { PrimaryButton } from 'src/components/button/PrimaryButton';
import { SecondaryButton } from 'src/components/button/SecondaryButton';
import { FavoriteIcon } from 'src/components/icons/Favorites';
import { FlexRow } from 'src/components/layout';
import { useFavoriteActions } from 'src/hooks/favorites';
import { Favorite } from 'src/types';
import styled, { useTheme } from 'styled-components/native';

export const FavoriteItem = memo(({ item }: { item: Favorite }) => {
  const actions = useFavoriteActions();
  const theme = useTheme();

  return (
    <CardWrapper key={item.id}>
      <CardTitle
        title={item.type.name}
        price={`${item.size.currency}${item.size.price}`}
      />
      <BowlOrderContent {...item} />
      <SummaryActions>
        <EditButton label="Edit" onPress={() => actions.editFavorite(item)} />
        <FlexRow>
          <FavoriteButton
            type={'primary'}
            Icon={<FavoriteIcon fill={theme.colors.white} />}
            onPress={() => actions.removeFavorite(item.id)}
          />
          <CartButton
            label="Add to Cart"
            onPress={() => actions.addToCart(item)}
          />
        </FlexRow>
      </SummaryActions>
    </CardWrapper>
  );
});

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
