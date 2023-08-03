import { Size } from 'src/types';

export const getSizeNumber = (size: Size) =>
  size.name === 'Small' ? 5 : size.name === 'Medium' ? 8 : 10;
