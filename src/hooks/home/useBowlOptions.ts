import { useMemo } from 'react';
import { Option } from 'src/components/options/types';

import { useBowls } from './useBowls';

export const useBowlOptions = (): Option[] => {
  const { bowls } = useBowls();
  return useMemo(
    () =>
      bowls.map(bowl => ({
        label: bowl.name,
        value: bowl,
      })),
    [bowls],
  );
};
