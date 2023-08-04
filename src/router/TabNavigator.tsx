import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CartTab } from 'src/components/CartTabIcon';
import { Logo } from 'src/components/Logo';
import { FavoriteIcon } from 'src/components/icons/Favorites';
import { HomeIcon } from 'src/components/icons/Home';
import { MenuIcon } from 'src/components/icons/Menu';
import { CartNavigator } from 'src/router/CartNavigator';
import { FavoritesScreen } from 'src/screens/Favorites';
import { HomeScreen } from 'src/screens/Home';
import { useTheme } from 'styled-components';

import { TabNavigatorParamList, TabRoutes } from './types';

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

export function TabNavigator() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName={TabRoutes.Home}
      screenOptions={({ navigation }) => ({
        headerTitle: '',
        headerLeft: () => (
          <MenuIcon onPress={() => navigation.toggleDrawer()} />
        ),
        headerLeftContainerStyle: { paddingLeft: 12 },
        headerRight: () => <Logo />,
        headerRightContainerStyle: { paddingRight: 12 },
        tabBarActiveTintColor: theme.colors.primary,
      })}>
      <Tab.Screen
        name={TabRoutes.Home}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <HomeIcon fill={color} />,
        }}
      />
      <Tab.Screen
        name={TabRoutes.Favorites}
        component={FavoritesScreen}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color }) => <FavoriteIcon fill={color} />,
        }}
      />
      <Tab.Screen
        name={TabRoutes.Cart}
        component={CartNavigator}
        options={({ navigation }) => ({
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color }) => (
            <CartTab
              fill={color}
              setBadgeNumber={number =>
                navigation.setOptions({ tabBarBadge: number })
              }
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
}
