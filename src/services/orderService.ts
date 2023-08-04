import { UserOrder } from 'src/types';

import { Api } from './api';

class OrderService extends Api {
  route: string;
  constructor(route) {
    super();
    this.route = route;
  }

  createOrder = (data: UserOrder) => {
    return this.post(this.route, data);
  };
}

export default new OrderService('create_order');
