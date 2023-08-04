import { useEffect, useMemo, useState } from 'react';
import { Option } from 'src/components/options/types';
import BowlService from 'src/services/bowlService';
import { Bowl } from 'src/types';

const useBowls = () => {
  const [bowls, setBowls] = useState<Bowl[]>([]);
  const [meta, setMeta] = useState(null);

  useEffect(() => {
    BowlService.getBowls()
      .then(({ meta, data }) => {
        setBowls(data);
        setMeta(meta);
      })
      .catch(() => setBowls(null));
  }, []);

  return { bowls, meta };
};

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
