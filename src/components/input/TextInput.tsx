import { TextInputProps } from 'react-native';
import { Error } from 'src/components/Error';
import { Caption } from 'src/components/text/Caption';
import styled, { useTheme } from 'styled-components/native';
type Props = {
  label: string;
  error?: string;
  required?: boolean;
  multiline?: boolean;
  height?: number;
} & TextInputProps;
export function TextInput({
  label,
  required = false,
  multiline = false,
  height = 48,
  style,
  error,
  ...inputProps
}: Props) {
  const theme = useTheme();
  return (
    <Wrapper style={style}>
      <Label>
        {label}
        {required ? <Caption colour={theme.colors.primary}>*</Caption> : ''}
      </Label>
      <Input
        {...inputProps}
        multiline={multiline}
        height={height}
        error={error}
      />
      {error && <Error>{error}</Error>}
    </Wrapper>
  );
}

const Wrapper = styled.View``;
const Label = styled(Caption)`
  margin-bottom: 8px;
`;

const Input = styled.TextInput<{ height: number; error?: string }>`
  width: 100%;
  border-radius: 4px;
  border-width: 1px;
  border-color: ${({ theme, error }) =>
    error ? theme.colors.primary : theme.colors.black};
  height: ${({ height }) => height}px;
  padding: 12px;
`;
