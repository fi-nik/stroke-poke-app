import { ExtraIngredient, Response } from 'src/types';

import { Api } from './api';

class ExtraIngredientService extends Api {
  route: string;
  constructor(route) {
    super();
    this.route = route;
  }

  getExtraIngredients = () => {
    return this.get<Response<ExtraIngredient[]>>(this.route);
  };

  getExtraIngredientById = async (id: string) => {
    const response = await this.get<Response<ExtraIngredient>>(
      this.route + '/' + id,
    );
    return response.data;
  };
}

export default new ExtraIngredientService('extra_ingredients');
