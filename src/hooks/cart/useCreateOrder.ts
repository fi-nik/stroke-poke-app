import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  CartRoutes,
  CartStackScreenNavigationProp,
  TabRoutes,
} from 'src/router/types';
import OrderService from 'src/services/orderService';
import { cartActions } from 'src/store';
import { BowlData, UserOrder } from 'src/types';
export function useCreateOrder() {
  const dispatch = useDispatch();
  const navigation =
    useNavigation<
      CartStackScreenNavigationProp<TabRoutes.Cart, CartRoutes.Checkout>
    >();
  return useCallback(
    (data: UserOrder) => {
      return OrderService.createOrder(data)
        .then(response => {
          dispatch(cartActions.cleanCart());
          // navigation.navigate(CartRoutes.Cart);
          // navigation.navigate(TabRoutes.Home);
        })
        .catch(error => console.log('error', error));
    },
    [dispatch, navigation],
  );
}
