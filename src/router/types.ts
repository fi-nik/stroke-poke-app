import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { DrawerNavigationProp } from '@react-navigation/drawer';
import type { CompositeNavigationProp } from '@react-navigation/native';
import { BowlData } from 'src/types';

export enum TabRoutes {
  Home = 'Home',
  Favorites = 'Favorites',
  Cart = 'Cart',
}
export enum AppRoutes {
  Tab = 'Tab',
}
export type AppNavigatorParamList = {
  [AppRoutes.Tab]: {
    screen: TabRoutes;
    params: any;
  };
};
export type TabNavigatorParamList = {
  [TabRoutes.Home]: {
    data?: BowlData;
  };
  [TabRoutes.Favorites]: undefined;
  [TabRoutes.Cart]: undefined;
};

export type FavoritesScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabNavigatorParamList, TabRoutes.Favorites>,
  DrawerNavigationProp<AppNavigatorParamList, AppRoutes.Tab>
>;
