import React, { useMemo } from "react";
import { SectionList } from "react-native";
import { OptionConfig, OptionConfigKey, OptionValue } from "screens/Home/types";
import { OptionItem } from "src/components/options/OptionItem";
import { OptionsTitle } from "src/components/options/OptionsTitle";
import { Body } from "src/components/text/Body";
import styled from "styled-components/native";

type Props = {
  options: OptionConfig[];
  onChange: (key: OptionConfigKey, value: OptionValue) => void;
  selectedOptions: Record<
    OptionConfigKey,
    OptionValue | Record<OptionValue, boolean>
  >;
};
export function Options({ options, onChange, selectedOptions }: Props) {
  const extraData = useMemo(() => ({ onChange }), [onChange]);
  return (
    <Wrapper>
      <SectionList
        style={{ flex: 1 }}
        extraData={extraData}
        sections={options}
        renderSectionFooter={({ section: { key } }) =>
          key !== options[options.length - 1].key ? <SectionSeparator /> : null
        }
        renderSectionHeader={({ section: { title, description } }) => (
          <OptionsHeader>
            <OptionsTitle>{title}</OptionsTitle>
            {description && <Body>{description}</Body>}
          </OptionsHeader>
        )}
        renderItem={({
          item: option,
          index,
          section: { multiselect, key, data },
        }) => (
          <OptionItemWrapper addSeparator={index < data.length - 1}>
            <OptionItem
              type={multiselect ? "checkbox" : "radio"}
              onPress={() => onChange(key, option.value)}
              value={option.value}
              label={option.label}
              selected={
                multiselect
                  ? selectedOptions[key] && selectedOptions[key][option.value]
                  : selectedOptions[key] === option.value
              }
            />
          </OptionItemWrapper>
        )}
      />
    </Wrapper>
  );
}

const Wrapper = styled.View`
  flex: 1;
`;

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
