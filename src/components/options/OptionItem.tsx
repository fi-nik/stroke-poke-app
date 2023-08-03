import React, { memo, useCallback } from 'react';
import { Checkbox } from 'src/components/button/Checkbox';
import { RadioButton } from 'src/components/button/RadioButton';

import { OptionValue } from './types';

type Props = {
  type: 'radio' | 'checkbox';
  onPress: (value: OptionValue) => void;
  value: OptionValue;
  label: string;
  description?: string;
  selected: boolean;
  disabled?: boolean;
};
export const OptionItem = memo(
  ({
    type,
    onPress,
    selected,
    value,
    label,
    description,
    disabled = false,
  }: Props) => {
    const onToggle = useCallback(() => onPress(value), [onPress, value]);
    return type === 'radio' ? (
      <RadioButton
        description={description}
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
