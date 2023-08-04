import { useFormik } from 'formik';
import { useCallback } from 'react';
import { OptionValue } from 'src/components/options/types';
import { Base, Sauce, Size, SectionKeys } from 'src/types';
import { getSizeNumber } from 'src/utils/bowlSize';
import * as yup from 'yup';

const ingredientValidationScheme = yup.object().shape({
  [SectionKeys.BowlSize]: yup
    .object<Size>()
    .nonNullable()
    .required('You need to select bowl size'),
  [SectionKeys.BowlBase]: yup
    .object<Base>()
    .nonNullable()
    .required('You need to select bowl base'),
  [SectionKeys.BowlSauce]: yup
    .object<Sauce>()
    .nonNullable()
    .required('You need to select sauce'),
  [SectionKeys.BowlIngredients]: yup
    .object()
    .when([SectionKeys.BowlSize], ([size]: [Size], schema) => {
      return schema.test(
        'maxIngredients',
        () => {
          if (!size) {
            return 'You need to select bowl size first';
          }
          return `You’ve chosen the maximum amount of ingredients for a ${size.name.toLowerCase()} size bowl.`;
        },
        map => {
          if (size) {
            const max = getSizeNumber(size);
            return Object.values(map).filter(a => a).length <= max;
          }
          return false;
        },
      );
    }),
});

type Values = Record<
  SectionKeys.BowlSize | SectionKeys.BowlBase | SectionKeys.BowlSauce,
  OptionValue
> &
  Record<SectionKeys.BowlIngredients, Record<string, OptionValue>>;

export function useBowlDetailsForm({ onSubmit, initialValues }) {
  const {
    setFieldValue,
    touched,
    values,
    errors,
    handleSubmit,
    setFieldTouched,
    validateField,
  } = useFormik<Values>({
    validateOnChange: false,
    initialValues: initialValues as Values,
    onSubmit: values =>
      onSubmit({
        ...values,
        [SectionKeys.BowlIngredients]: Object.values(
          values[SectionKeys.BowlIngredients],
        ),
      }),
    validationSchema: ingredientValidationScheme,
  });

  const onChangeSize = useCallback(
    (value: OptionValue) => {
      setFieldTouched(SectionKeys.BowlSize, true, false);
      setFieldValue(SectionKeys.BowlSize, value).then(() => {
        validateField(SectionKeys.BowlSize).then(() => {
          validateField(SectionKeys.BowlIngredients);
        });
      });
    },
    [setFieldValue, validateField, setFieldTouched],
  );

  const onChangeBase = useCallback(
    (value: OptionValue) => {
      setFieldTouched(SectionKeys.BowlBase, true, false);

      setFieldValue(SectionKeys.BowlBase, value).then(() => {
        validateField(SectionKeys.BowlBase);
      });
    },
    [setFieldValue, validateField, setFieldTouched],
  );

  const onChangeSauce = useCallback(
    (value: OptionValue) => {
      setFieldTouched(SectionKeys.BowlSauce, true, false);

      setFieldValue(SectionKeys.BowlSauce, value).then(() => {
        validateField(SectionKeys.BowlSauce);
      });
    },
    [setFieldValue, validateField, setFieldTouched],
  );

  const selectedIngredients = values[SectionKeys.BowlIngredients];

  const selectedSize = values[SectionKeys.BowlSize]
    ? getSizeNumber(values[SectionKeys.BowlSize] as Size)
    : 0;

  const onChangeIngredients = useCallback(
    async (value: OptionValue) => {
      await setFieldTouched(SectionKeys.BowlIngredients, true, false);

      if (selectedIngredients && selectedIngredients[value.id]) {
        const restSelected = { ...selectedIngredients };
        delete restSelected[value.id];
        await setFieldValue(SectionKeys.BowlIngredients, restSelected);
      } else {
        await setFieldValue(SectionKeys.BowlIngredients, {
          ...selectedIngredients,
          [value.id]: value,
        });
      }
      await validateField(SectionKeys.BowlIngredients);
    },
    [setFieldValue, selectedIngredients, validateField, setFieldTouched],
  );

  const maxSelectedIngredients =
    touched[SectionKeys.BowlIngredients] &&
    Object.values(selectedIngredients).filter(a => a).length === selectedSize;

  return {
    onChangeBase,
    onChangeIngredients,
    onChangeSauce,
    onChangeSize,
    errors,
    values,
    maxSelectedIngredients,
    selectedSize,
    handleSubmit,
  };
}
