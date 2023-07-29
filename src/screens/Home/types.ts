export type OptionValue = string;

export type Option = {
  value: OptionValue;
  label: string;
  description?: string;
};

export type OptionConfigKey = string;

export type OptionConfig = {
  key: OptionConfigKey;
  title: string;
  description?: string;
  multiselect: boolean;
  data: Option[];
};
