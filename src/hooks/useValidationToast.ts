import { useEffect } from 'react';
import { Toast } from 'src/modules/Toast';

export const useValidationToast = (errors, isValid) => {
  useEffect(() => {
    if (!isValid) {
      Toast.showError(Object.values(errors).join('\n'));
    }
  }, [isValid]);
};
