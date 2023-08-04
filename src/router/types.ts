import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { DrawerNavigationProp } from '@react-navigation/drawer';
import type { CompositeNavigationProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BowlData } from 'src/types';

export enum TabRoutes {
  Home = 'Home',
  Favorites = 'Favorites',
  Cart = 'CartNavigator',
}
export enum AppRoutes {
  Tab = 'Tab',
}
export enum CartRoutes {
  Cart = 'Cart',
  Checkout = 'Checkout',
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
  [TabRoutes.Cart]: {
    screen?: CartRoutes;
  };
};
export type CartNavigatorParamList = {
  [CartRoutes.Cart]: undefined;
  [CartRoutes.Checkout]: undefined;
};

export type TabScreenNavigationProp<T extends TabRoutes> =
  CompositeNavigationProp<
    BottomTabNavigationProp<TabNavigatorParamList, T>,
    DrawerNavigationProp<AppNavigatorParamList, AppRoutes.Tab>
  >;

export type CartStackScreenNavigationProp<
  T extends TabRoutes,
  Q extends CartRoutes,
> = CompositeNavigationProp<
  BottomTabNavigationProp<TabNavigatorParamList, T>,
  NativeStackNavigationProp<CartNavigatorParamList, Q>
>;
