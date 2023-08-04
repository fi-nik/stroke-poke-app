import React from 'react';
import { Card } from 'src/components/Card';
import { PrimaryButton } from 'src/components/button/PrimaryButton';
import { ArrowRightIcon } from 'src/components/icons/ArrowRight';
import { Flex } from 'src/components/layout';
import { Options } from 'src/components/options/Options';
import { Option, OptionConfig } from 'src/components/options/types';
import { useBowlTypeForm } from 'src/hooks/home';
import { Bowl, SectionKeys } from 'src/types';
import styled from 'styled-components/native';

type Props = {
  onConfirm: (selectedBowl: Bowl) => void;
  options: Option[];
  initialValue: Bowl | null;
};

export function BowlType({ onConfirm, options, initialValue }: Props) {
  const form = useBowlTypeForm({
    onSubmit: onConfirm,
    initialValue,
  });

  const data = [
    {
      key: SectionKeys.BowlType,
      title: 'Make your own poke bowl',
      multiselect: false,
      data: options,
      error: form.errors[SectionKeys.BowlType],
      onChange: value => {
        form.setFieldValue(SectionKeys.BowlType, value);
      },
      description:
        'Select the type of bowl your’d like, the size, add the base sauce and all the added ingredients. We’ll take care of the rest!',
    },
  ];

  return (
    <Flex>
      <ShrinkView>
        <Card>
          <Options
            isValid={form.isValid}
            options={data as OptionConfig[]}
            selectedOptions={form.values}
          />
        </Card>
      </ShrinkView>

      <ShrinkView>
        <SubmitButton
          onPress={form.handleSubmit}
          label="Next"
          RightIcon={<ArrowRightIcon />}
        />
      </ShrinkView>
    </Flex>
  );
}

const ShrinkView = styled.View`
  flex-shrink: 1;
`;

const SubmitButton = styled(PrimaryButton)`
  margin-top: 40px;
`;
