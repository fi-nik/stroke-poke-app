import { useFormik } from 'formik';
import { Bowl, SectionKeys } from 'src/types';
import * as yup from 'yup';

export function useBowlTypeForm({ onSubmit, initialValue }) {
  return useFormik({
    initialValues: { [SectionKeys.BowlType]: initialValue },
    validationSchema: yup.object().shape({
      [SectionKeys.BowlType]: yup
        .object<Bowl>()
        .nonNullable()
        .required('You need to select poke bowl first'),
    }),
    onSubmit: values => onSubmit(values[SectionKeys.BowlType]),
  });
}
