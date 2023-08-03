import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Crypto from 'expo-crypto';
import { Favorite } from 'src/types';

export class Favorites {
  fetched: boolean;
  table_key: string;
  favorites: Favorite[];
  constructor() {
    this.fetched = false;
    this.favorites = [];
    this.table_key = 'favorites';
  }

  async fetchFavorites() {
    this.favorites = JSON.parse(
      await AsyncStorage.getItem(this.table_key),
    ) as Favorite[];
    this.fetched = true;
  }

  async saveFavorites() {
    await AsyncStorage.setItem(this.table_key, JSON.stringify(this.favorites));
  }

  async getFavorite(id: string): Promise<Favorite> {
    if (!this.fetched) {
      await this.getFavorites();
    }
    return this.favorites.find(favorite => favorite.id === id);
  }

  async getFavorites(): Promise<Favorite[]> {
    if (!this.fetched) {
      const favoriteJson = await AsyncStorage.getItem(this.table_key);
      this.favorites = JSON.parse(favoriteJson) as Favorite[];
      this.fetched = true;
    }
    return this.favorites;
  }

  async addFavorite(favorite: Omit<Favorite, 'id'>) {
    const id = Crypto.randomUUID();
    this.favorites.push({ ...favorite, id });
    await this.saveFavorites();
    return id;
  }

  async deleteFavorite(favoriteId: string) {
    const index = this.favorites.findIndex(favorite => favorite.id);
    this.favorites.splice(index, 1);
    return this.saveFavorites();
  }
}
