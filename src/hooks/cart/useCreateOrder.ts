import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Toast } from 'src/modules/Toast';
import OrderService from 'src/services/orderService';
import { cartActions } from 'src/store';
import { UserOrder } from 'src/types';
import { useTheme } from 'styled-components/native';
export function useCreateOrder() {
  const dispatch = useDispatch();
  const theme = useTheme();
  return useCallback(
    (data: UserOrder) => {
      return OrderService.createOrder(data)
        .then(() => {
          Toast.showSuccess('Order successfully created');
          dispatch(cartActions.cleanCart());
        })
        .catch(error => {
          Toast.showError('Error while creating order:\n' + error.message);
        });
    },
    [dispatch],
  );
}
