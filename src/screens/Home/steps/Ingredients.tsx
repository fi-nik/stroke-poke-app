import { useFormik } from 'formik';
import React, { useCallback } from 'react';
import { OptionValue } from 'screens/Home/types';
import { Card } from 'src/components/Card';
import { PrimaryButton } from 'src/components/button/PrimaryButton';
import { SecondaryButton } from 'src/components/button/SecondaryButton';
import { ArrowRight } from 'src/components/icons/arrow-right';
import { Flex, FlexShrink } from 'src/components/layout';
import { Options } from 'src/components/options/Options';
import styled from 'styled-components/native';
import * as yup from 'yup';

const sectionKeys = {
  size: 'size',
  base: 'base',
  sauce: 'sauce',
  other: 'other',
};

const ingredientValidationScheme = yup.object().shape({
  [sectionKeys.size]: yup.string().required('You need to select bowl size'),
  [sectionKeys.base]: yup.string().required('You need to select bowl base'),
  [sectionKeys.sauce]: yup.string().required('You need to select sauce'),
  [sectionKeys.other]: yup
    .object()
    .when([sectionKeys.size], ([size]: string[], schema) => {
      return schema.test(
        'maxKeys',
        () => {
          if (!size) {
            return 'You need to select bowl size first';
          }
          return `For selected bowl you can pick maximum ${size} ingredients.`;
        },
        map => {
          if (size) {
            const max = Number(size);
            return Object.values(map).filter(a => a).length <= max;
          }
          return false;
        },
      );
    }),
});

type Values = Record<'size' | 'base' | 'sauce', string> &
  Record<'other', Record<string, boolean>>;

const formikProps = {
  validateOnChange: false,
  initialValues: {
    [sectionKeys.size]: '',
    [sectionKeys.base]: '',
    [sectionKeys.sauce]: '',
    [sectionKeys.other]: {},
  } as Values,
  onSubmit: () => {
    console.log('SVE OK!');
  },
  validationSchema: ingredientValidationScheme,
};

export function Ingredients({
  sizeOptions,
  goBack,
  baseOptions,
  sauceOptions,
  otherIngredientOptions,
}) {
  const {
    setFieldValue,
    touched,
    values,
    errors,
    handleSubmit,
    setFieldTouched,
    isValid,
    validateField,
  } = useFormik<Values>(formikProps);

  const onChangeSize = useCallback(
    (value: OptionValue) => {
      setFieldTouched(sectionKeys.size, true, false);
      setFieldValue(sectionKeys.size, value).then(() => {
        validateField(sectionKeys.size).then(() => {
          validateField(sectionKeys.other);
        });
      });
    },
    [setFieldValue, validateField, setFieldTouched],
  );

  const onChangeBase = useCallback(
    (value: OptionValue) => {
      setFieldTouched(sectionKeys.base, true, false);

      setFieldValue(sectionKeys.base, value).then(() => {
        validateField(sectionKeys.base);
      });
    },
    [setFieldValue, validateField, setFieldTouched],
  );

  const onChangeSauce = useCallback(
    (value: OptionValue) => {
      setFieldTouched(sectionKeys.sauce, true, false);

      setFieldValue(sectionKeys.sauce, value).then(() => {
        validateField(sectionKeys.sauce);
      });
    },
    [setFieldValue, validateField, setFieldTouched],
  );

  const selectedOther = values[sectionKeys.other];
  const selectedSize = values[sectionKeys.size]
    ? Number(values[sectionKeys.size])
    : 0;
  const onChangeOther = useCallback(
    (value: OptionValue) => {
      setFieldTouched(sectionKeys.other, true, false);

      setFieldValue(sectionKeys.other, {
        ...selectedOther,
        [value]: !selectedOther[value],
      }).then(() => {
        validateField(sectionKeys.other);
      });
    },
    [setFieldValue, selectedOther, validateField, setFieldTouched],
  );
  const maxSelectedOther =
    touched[sectionKeys.other] &&
    Object.values(selectedOther).filter(a => a).length === selectedSize;
  const data = [
    {
      key: sectionKeys.size,
      title: 'Pick a size',
      data: sizeOptions,
      multiselect: false,
      onChange: onChangeSize,
      error: errors[sectionKeys.size],
    },
    {
      key: sectionKeys.base,
      title: 'Pick the base',
      data: baseOptions,
      multiselect: false,
      onChange: onChangeBase,
      error: errors[sectionKeys.base],
    },
    {
      key: sectionKeys.sauce,
      title: 'Pick a sauce',
      data: sauceOptions,
      multiselect: false,
      onChange: onChangeSauce,
      error: errors[sectionKeys.sauce],
    },
    {
      key: sectionKeys.other,
      title: 'Pick other ingredients',
      description: 'Pick up to 5, 8 or 10 ingredients based on bowl size.',
      data: otherIngredientOptions,
      multiselect: true,
      onChange: onChangeOther,
      error:
        errors[sectionKeys.other] ||
        (maxSelectedOther &&
          `For selected bowl you can pick maximum ${selectedSize} ingredients.`),
      disabled: maxSelectedOther || errors[sectionKeys.other],
    },
  ];

  return (
    <Flex>
      <FlexShrink>
        <Card>
          <Options isValid={isValid} options={data} selectedOptions={values} />
        </Card>
      </FlexShrink>

      <ActionButtons>
        <SecondaryButton label="Back" onPress={goBack} />
        <PrimaryButton
          label="Next"
          onPress={handleSubmit}
          RightIcon={ArrowRight}
        />
      </ActionButtons>
    </Flex>
  );
}

const ActionButtons = styled.View`
  flex-shrink: 1;
  flex-direction: row;
  gap: 10px;
  margin-top: 30px;
`;
