import { Caption } from 'src/components/text/Caption';
import { useTheme } from 'styled-components';

export function OptionError({ children }) {
  const theme = useTheme();
  return (
    <Caption>
      <Caption colour={theme.colors.primary}>*</Caption>
      {children}
    </Caption>
  );
}
