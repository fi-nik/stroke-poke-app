export type Base = {
  id: number;
  name: string;
  description: string;
  image: {
    id: number;
  };
  imagePath: string;
};

export type Bowl = {
  id: number;
  name: string;
  description: string;
  image: {
    id: number;
  };
  imagePath: string;
};

export type Order = {
  bowlId: string;
  sizeId: string;
  baseId: string;
  sauceId: string;
  ingredients: string[];
  extraIngredients: string[];
};

export type Ingredient = {
  id: number;
  name: string;
};

export type ExtraIngredient = Ingredient & {
  currency: string;
  price: number;
};

export type Sauce = {
  id: number;
  name: string;
  description: string;
};

export type Size = {
  id: number;
  name: string;
  description: string;
  currency: string;
  price: number;
};

export type Response<T> = {
  data: T;
  meta: {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
  };
};
