import { useFormik } from 'formik';
import React from 'react';
import { Option, OptionValue } from 'screens/Home/types';
import { Card } from 'src/components/Card';
import { PrimaryButton } from 'src/components/button/PrimaryButton';
import { ArrowRight } from 'src/components/icons/arrow-right';
import { Flex } from 'src/components/layout';
import { Options } from 'src/components/options/Options';
import { useBowlOptions, useBowls } from 'src/hooks/bowls';
import styled from 'styled-components/native';
import * as yup from 'yup';

type Props = {
  onConfirm: (value: OptionValue) => void;
  options: Option[];
};

const pokeKey = 'poke';

export function BowlSelection({ onConfirm, options }: Props) {
  const formik = useFormik({
    initialValues: { [pokeKey]: '' },
    validationSchema: yup.object().shape({
      [pokeKey]: yup.string().required('You need to select poke bowl first'),
    }),
    onSubmit: values => onConfirm(values[pokeKey]),
  });

  const data = [
    {
      key: pokeKey,
      title: 'Make your own poke bowl',
      multiselect: false,
      data: options,
      error: formik.errors[pokeKey],
      onChange: formik.handleChange(pokeKey),
      description:
        'Select the type of bowl your’d like, the size, add the base sauce and all the added ingredients. We’ll take care of the rest!',
    },
  ];

  return (
    <Flex>
      <ShinkView>
        <Card>
          <Options
            isValid={formik.isValid}
            options={data}
            selectedOptions={formik.values}
          />
        </Card>
      </ShinkView>

      <ShinkView>
        <SubmitButton
          onPress={formik.handleSubmit}
          label="Next"
          RightIcon={ArrowRight}
        />
      </ShinkView>
    </Flex>
  );
}

const ShinkView = styled.View`
  flex-shrink: 1;
`;

const SubmitButton = styled(PrimaryButton)`
  margin-top: 40px;
`;
