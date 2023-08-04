import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import OrderService from 'src/services/orderService';
import { cartActions } from 'src/store';
import { UserOrder } from 'src/types';

export function useCreateOrder() {
  const dispatch = useDispatch();
  return useCallback(
    (data: UserOrder) => {
      return OrderService.createOrder(data)
        .then(() => {
          dispatch(cartActions.cleanCart());
        })
        .catch(error => console.log('error', error));
    },
    [dispatch],
  );
}
