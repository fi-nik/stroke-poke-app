import React, { memo, useCallback } from 'react';
import { Checkbox } from 'src/components/button/Checkbox';
import { RadioButton } from 'src/components/button/RadioButton';

type Props = {
  type: 'radio' | 'checkbox';
  onPress: (value: string) => void;
  value: string;
  label: string;
  description?: string;
  selected: boolean;
  disabled?: boolean;
};
export const OptionItem = memo(
  ({ type, onPress, selected, value, label, disabled = false }: Props) => {
    const onToggle = useCallback(() => onPress(value), [onPress, value]);
    return type === 'radio' ? (
      <RadioButton
        onToggle={onToggle}
        checked={selected}
        label={label}
        disabled={disabled}
      />
    ) : (
      <Checkbox
        checked={selected}
        onToggle={onToggle}
        label={label}
        disabled={disabled}
      />
    );
  },
);
