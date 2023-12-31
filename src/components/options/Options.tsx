import React, { useCallback } from 'react';
import { SectionList } from 'react-native';
import styled from 'styled-components/native';

import { OptionError } from './OptionError';
import { OptionItem } from './OptionItem';
import { OptionsTitle } from './OptionsTitle';
import { Option, OptionConfig, OptionConfigKey, OptionValue } from './types';
import { Body } from '../text/Body';

type Props = {
  options: OptionConfig[];
  selectedOptions: Record<
    OptionConfigKey,
    OptionValue | Record<string, OptionValue>
  >;
  isValid?: boolean;
};

export function Options({ options, selectedOptions }: Props) {
  const latestOptionKey = options[options.length - 1].key;
  const renderItem = useCallback(
    ({
      item: option,
      index,
      section: { multiselect, key, data, onChange, disabled },
    }: {
      item: Option;
      index: number;
      section: OptionConfig;
    }) => {
      const selected = multiselect
        ? selectedOptions[key] && selectedOptions[key][option.value.id]
        : selectedOptions[key]?.id === option.value.id;

      return (
        <OptionItemWrapper
          addSeparator={index < data.length - 1}
          key={key + option.value}>
          <OptionItem
            description={option.description}
            onPress={onChange}
            type={multiselect ? 'checkbox' : 'radio'}
            value={option.value}
            label={option.label}
            disabled={!selected && disabled}
            selected={selected}
          />
        </OptionItemWrapper>
      );
    },
    [selectedOptions],
  );

  const renderSectionHeader = useCallback(
    ({ section: { title, description } }: { section: OptionConfig }) => (
      <OptionsHeader>
        <OptionsTitle>{title}</OptionsTitle>
        {description ? <Body>{description}</Body> : null}
      </OptionsHeader>
    ),
    [],
  );

  const renderSectionFooter = useCallback(
    ({ section: { key, error } }: { section: OptionConfig }) => (
      <>
        {error && (
          <SectionSeparator>
            <OptionError>{error}</OptionError>
          </SectionSeparator>
        )}
        {key !== latestOptionKey && <SectionSeparator />}
      </>
    ),
    [latestOptionKey],
  );

  return (
    <SectionList
      initialNumToRender={25}
      bounces={false}
      sections={options}
      renderSectionFooter={renderSectionFooter}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
    />
  );
}

const OptionsHeader = styled.View`
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const OptionItemWrapper = styled.View<{ addSeparator: boolean }>`
  margin-bottom: ${({ addSeparator }) => (addSeparator ? 16 : 0)}px;
`;

const SectionSeparator = styled.View`
  margin-top: 30px;
`;
