import { useState, useRef } from 'react';
import { ViewStyle } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Error } from 'src/components/Error';
import { Body } from 'src/components/text/Body';
import { Caption } from 'src/components/text/Caption';
import styled, { useTheme } from 'styled-components/native';
type Props = {
  options: { value: string; label: string }[];
  label: string;
  error?: string;
  placeholder: string;
  selectedValue: string;
  onChange: (string) => void;
  required?: boolean;
  style?: ViewStyle;
};

export function Select({
  options,
  label,
  required = false,
  placeholder: placeholderText,
  onChange,
  style,
  error,
}: Props) {
  const theme = useTheme();
  const placeholder = useRef({ label: placeholderText, value: null }).current;
  return (
    <Wrapper style={style}>
      <Label>
        {label}
        {required ? <Caption colour={theme.colors.primary}>*</Caption> : ''}
      </Label>
      <SelectInput error={error}>
        <RNPickerSelect
          placeholder={placeholder}
          items={options}
          onValueChange={value => onChange(value)}
        />
      </SelectInput>
      {error && <Error>{'*' + error}</Error>}
    </Wrapper>
  );
}

const Wrapper = styled.View``;
const Label = styled(Caption)`
  margin-bottom: 8px;
`;

const SelectInput = styled.View<{ error?: string }>`
  width: 100%;
  border-radius: 4px;
  border-width: 1px;
  border-color: ${({ theme, error }) =>
    error ? theme.colors.primary : theme.colors.black};
  padding: 12px;
`;
