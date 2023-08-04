import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { ScreenTitle } from 'src/components/ScreenTitle';
import { ScreenWrapper } from 'src/components/ScreenWrapper';
import { useFavorites } from 'src/hooks/favorites';
import { Favorite } from 'src/types';

import { FavoriteItem } from './FavoriteItem';

export function FavoritesScreen() {
  const favorites = useFavorites();
  const renderItem = useCallback(
    ({ item }: { item: Favorite }) => <FavoriteItem item={item} />,
    [],
  );

  return (
    <ScreenWrapper>
      <ScreenTitle>Favorites</ScreenTitle>
      <FlatList
        bounces={false}
        keyExtractor={item => item.id}
        data={favorites}
        renderItem={renderItem}
      />
    </ScreenWrapper>
  );
}
