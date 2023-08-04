import { useFormik } from 'formik';
import { useCallback, useMemo } from 'react';
import { ExtraIngredient, SectionKeys } from 'src/types';
import { convertToMap } from 'src/utils/orderHelpers';

export const useExtraIngredientsForm = ({
  onSubmit,
  initialValues,
}: {
  initialValues: ExtraIngredient[];
  onSubmit: (values: ExtraIngredient[]) => void;
}) => {
  const { setFieldValue, values, handleSubmit } = useFormik<{
    [SectionKeys.ExtraIngredients]: Record<string, ExtraIngredient>;
  }>({
    validateOnChange: false,
    initialValues: {
      [SectionKeys.ExtraIngredients]: convertToMap(initialValues),
    },
    onSubmit: values => {
      onSubmit(Object.values(values[SectionKeys.ExtraIngredients]));
    },
  });
  const selectedExtraIngredients = values[SectionKeys.ExtraIngredients];

  const onChange = useCallback(
    (value: ExtraIngredient) => {
      if (selectedExtraIngredients && selectedExtraIngredients[value.id]) {
        const restSelected = { ...selectedExtraIngredients };
        delete restSelected[value.id];
        setFieldValue(SectionKeys.ExtraIngredients, restSelected);
      } else {
        setFieldValue(SectionKeys.ExtraIngredients, {
          ...selectedExtraIngredients,
          [value.id]: value,
        });
      }
    },
    [setFieldValue, selectedExtraIngredients],
  );

  return useMemo(
    () => ({ handleSubmit, values, onChange }),
    [handleSubmit, values, onChange],
  );
};
