import { Bowl, Response } from 'src/types';

import { Api } from './api';

class BowlService extends Api {
  route: string;
  constructor(route) {
    super();
    this.route = route;
  }

  getBowls = () => {
    return this.get<Response<Bowl[]>>(this.route);
  };

  getBowlById = async (id: string): Promise<Bowl> => {
    const response = await this.get<Response<Bowl>>(this.route + '/' + id);
    return response.data;
  };
}

export default new BowlService('bowls');
