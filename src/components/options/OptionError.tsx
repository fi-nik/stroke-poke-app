import { useTheme } from 'styled-components';

import { Caption } from '../text/Caption';

export function OptionError({ children }) {
  const theme = useTheme();
  return (
    <Caption>
      <Caption colour={theme.colors.primary}>*</Caption>
      {children}
    </Caption>
  );
}
