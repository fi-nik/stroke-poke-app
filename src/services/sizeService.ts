import { Response, Size } from 'src/types';

import { Api } from './api';

class SizeService extends Api {
  route: string;
  constructor(route) {
    super();
    this.route = route;
  }

  getSizes = () => {
    return this.get<Response<Size[]>>(this.route);
  };

  getSizeById = async (id: string) => {
    const response = await this.get<Response<Size>>(this.route + '/' + id);
    return response.data;
  };
}

export default new SizeService('sizes');
