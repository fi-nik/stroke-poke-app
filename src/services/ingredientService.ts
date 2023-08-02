import { Ingredient, Response } from 'src/types';

import { Api } from './api';

class IngredientService extends Api {
  route: string;
  constructor(route) {
    super();
    this.route = route;
  }

  getIngredients = () => {
    return this.get<Response<Ingredient[]>>(this.route);
  };

  getIngredientById = async (id: string) => {
    const response = await this.get<Response<Ingredient>>(
      this.route + '/' + id,
    );
    return response.data;
  };
}

export default new IngredientService('ingredients');
