import { Size } from 'src/types';

export const getSizeNumber = (size: Size) =>
  size.name === 'Small' ? 5 : size.name === 'Medium' ? 8 : 10;

export function convertToMap<T extends { id: string | number }>(items: T[]) {
  const map = {};
  items.forEach(item => (map[item.id] = item));
  return map;
}
