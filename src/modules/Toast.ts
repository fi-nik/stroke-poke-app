import { default as BasicToast } from 'react-native-root-toast';
import { theme } from 'src/modules/Theme';

export const Toast = {
  ...BasicToast,
  showError: (message, options = {}) =>
    BasicToast.show(message, {
      duration: BasicToast.durations.LONG,
      backgroundColor: theme.colors.error,
      textColor: theme.colors.white,
      ...options,
    }),
  showSuccess: (message, options = {}) =>
    BasicToast.show(message, {
      duration: BasicToast.durations.LONG,
      backgroundColor: theme.colors.success,
      textColor: theme.colors.white,
      ...options,
    }),
};
