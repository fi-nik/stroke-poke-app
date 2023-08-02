import React, { useCallback } from 'react';
import { SectionList } from 'react-native';
import {
  Option,
  OptionConfig,
  OptionConfigKey,
  OptionValue,
} from 'screens/Home/types';
import { OptionError } from 'src/components/options/OptionError';
import { OptionItem } from 'src/components/options/OptionItem';
import { OptionsTitle } from 'src/components/options/OptionsTitle';
import { Body } from 'src/components/text/Body';
import styled from 'styled-components/native';

type Props = {
  options: OptionConfig[];
  selectedOptions: Record<
    OptionConfigKey,
    OptionValue | Record<OptionValue, boolean>
  >;
  isValid: boolean;
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
        ? selectedOptions[key] && selectedOptions[key][option.value]
        : selectedOptions[key] === option.value;
      return (
        <OptionItemWrapper
          addSeparator={index < data.length - 1}
          key={key + option.value}>
          <OptionItem
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
        {description && <Body>{description}</Body>}
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
    <Wrapper>
      <SectionList
        initialNumToRender={25}
        bounces={false}
        sections={options}
        renderSectionFooter={renderSectionFooter}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
      />
    </Wrapper>
  );
}

const Wrapper = styled.View``;
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
