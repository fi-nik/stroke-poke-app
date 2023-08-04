import * as Crypto from 'expo-crypto';

export enum SectionKeys {
  BowlType = 'poke',
  BowlSize = 'size',
  BowlBase = 'base',
  BowlSauce = 'sauce',
  BowlIngredients = 'ingredients',
  ExtraIngredients = 'extra_ingredients',
}

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
export enum QueryKey {
  favorites = 'favorites',
  sizes = 'sizes',
  bases = 'bases',
}
export class BowlData {
  constructor() {
    this.id = Crypto.randomUUID();
    this.extraIngredients = [];
    this.ingredients = [];
    this.size = null;
    this.sauce = null;
    this.base = null;
    this.type = null;
  }
  id: string;
  size: Size;
  type: Bowl;
  sauce: Sauce;
  base: Base;
  ingredients: Ingredient[];
  extraIngredients: ExtraIngredient[];
}

export type BowlOrder = BowlData & {
  id: string;
  count: number;
};

export type UserOrder = {
  bowlId: string;
  sizeId: string;
  baseId: string;
  sauceId: string;
  ingredients: string[];
  extraIngredients: string[];
}[];

export type Cart = BowlOrder[];

export type Favorite = BowlData;
