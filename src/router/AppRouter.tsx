import { createDrawerNavigator } from '@react-navigation/drawer';
import { LocationsScreen } from 'screens/Locations';
import { DrawerContent } from 'src/components/DrawerContent';
import { TabNavigator } from 'src/router/TabNavigator';
import { AppRoutes } from 'src/router/types';
import { useTheme } from 'styled-components/native';
const Drawer = createDrawerNavigator();

export function AppNavigator() {
  const theme = useTheme();
  return (
    <Drawer.Navigator
      drawerContent={DrawerContent}
      screenOptions={() => ({
        drawerPosition: 'right',
        drawerActiveTintColor: theme.colors.primary,
        headerShown: false,
        drawerLabel: '',
      })}>
      <Drawer.Screen name={AppRoutes.Tab} component={TabNavigator} />
      <Drawer.Screen name={AppRoutes.Locations} component={LocationsScreen} />
    </Drawer.Navigator>
  );
}
