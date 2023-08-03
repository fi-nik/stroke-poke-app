import React, { memo } from 'react';
import { BowlOrderContent } from 'src/components/BowlOrderContent';
import { Card } from 'src/components/Card';
import { CardTitle } from 'src/components/CardTitle';
import { IconButton } from 'src/components/button/IconButton';
import { ArrowDownIcon } from 'src/components/icons/ArrowDown';
import { ArrowUpIcon } from 'src/components/icons/ArrowUp';
import { FavoriteIcon } from 'src/components/icons/Favorites';
import { TrashIcon } from 'src/components/icons/Trash';
import { FlexRow } from 'src/components/layout';
import { Body } from 'src/components/text/Body';
import { useCartActions } from 'src/hooks/cart/useCartActions';
import { useIsFavorite } from 'src/hooks/favorites/useIsFavorite';
import { BowlOrder } from 'src/types';
import styled, { useTheme } from 'styled-components/native';

export const CartItem = memo(({ item }: { item: BowlOrder }) => {
  const actions = useCartActions();
  const isFavorite = useIsFavorite(item.id);
  const theme = useTheme();
  return (
    <CardWrapper key={item.id}>
      <CardTitle
        title={item.type.name}
        price={`${item.size.currency}${item.size.price}`}
      />
      <BowlOrderContent {...item} />
      <SummaryActions>
        <FlexRow>
          <FavoriteButton
            type={isFavorite ? 'primary' : 'secondary'}
            Icon={
              <FavoriteIcon
                fill={isFavorite ? theme.colors.white : theme.colors.black}
              />
            }
            onPress={() =>
              isFavorite
                ? actions.removeFavorite(item.id)
                : actions.addFavorite(item)
            }
          />
          <DeleteButton
            type="secondary"
            Icon={<TrashIcon />}
            onPress={() => actions.removeBowl(item.id)}
          />
          <CounterArea>
            <IconButton
              onPress={() => actions.decrementBowl(item.id)}
              type="primary"
              Icon={<ArrowDownIcon />}
              background={theme.colors.border.primary}
            />
            <Counter>
              <Body>{item.count}</Body>
            </Counter>
            <IconButton
              onPress={() => actions.incrementBowl(item.id)}
              type="primary"
              Icon={<ArrowUpIcon />}
              background={theme.colors.border.primary}
            />
          </CounterArea>
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

const DeleteButton = styled(IconButton)``;

const SummaryActions = styled.View`
  flex-shrink: 1;
`;

const CounterArea = styled.View`
  flex-direction: row;
  flex-grow: 1;
  justify-content: flex-end;
`;

const Counter = styled.View`
  min-height: 40px;
  min-width: 40px;
  align-items: center;
  justify-content: center;
`;
