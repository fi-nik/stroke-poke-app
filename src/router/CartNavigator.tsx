import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { CartScreen } from 'screens/Cart';
import { CheckoutScreen } from 'screens/Checkout';
import { CartRoutes } from 'src/router/types';

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'none',
};

const Stack = createNativeStackNavigator();

export function CartNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={CartRoutes.Cart} component={CartScreen} />
      <Stack.Screen name={CartRoutes.Checkout} component={CheckoutScreen} />
    </Stack.Navigator>
  );
}
