import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartScreen } from 'screens/Cart';
import { CheckoutScreen } from 'screens/Checkout';
import { CartRoutes } from 'src/router/types';

const Stack = createNativeStackNavigator();
const screenOptions = { headerShown: false };
export function CartNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
      <Stack.Screen name={CartRoutes.Cart} component={CartScreen} />
      <Stack.Screen name={CartRoutes.Checkout} component={CheckoutScreen} />
    </Stack.Navigator>
  );
}
