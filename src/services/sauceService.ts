import { Response, Sauce } from 'src/types';

import { Api } from './api';

class SauceService extends Api {
  route: string;
  constructor(route) {
    super();
    this.route = route;
  }

  getSauces = () => {
    return this.get<Response<Sauce[]>>(this.route);
  };

  getSauceById = async (id: string) => {
    const response = await this.get<Response<Sauce>>(this.route + '/' + id);
    return response.data;
  };
}

export default new SauceService('sauces');
