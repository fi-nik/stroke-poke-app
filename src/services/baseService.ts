import { Base, Response } from 'src/types';

import { Api } from './api';

class BaseService extends Api {
  route: string;
  constructor(route) {
    super();
    this.route = route;
  }

  getBases = () => {
    return this.get<Response<Base[]>>(this.route);
  };

  getBaseById = async (id: string) => {
    const response = await this.get<Response<Base>>(this.route + '/' + id);
    return response.data;
  };
}

export default new BaseService('bases');
