import { useFormik } from 'formik';
import { ScrollView } from 'react-native';
import { Card } from 'src/components/Card';
import { ScreenWrapper } from 'src/components/ScreenWrapper';
import { PrimaryButton } from 'src/components/button/PrimaryButton';
import { SecondaryButton } from 'src/components/button/SecondaryButton';
import { Select } from 'src/components/input/Select';
import { TextInput } from 'src/components/input/TextInput';
import { Headline } from 'src/components/text/Headline';
import { useCart, useCreateOrder } from 'src/hooks/cart';
import { CartRoutes, TabRoutes } from 'src/router/types';
import { BowlData } from 'src/types';
import styled, { useTheme } from 'styled-components/native';
import * as yup from 'yup';

import { OrderSummary } from './OrderSummary';

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const validationSchema = yup.object().shape({
  name: yup.string().required('Please enter full name'),
  address: yup.string().required('Please enter your address'),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Please enter your phone number'),
  payment: yup
    .mixed()
    .oneOf(['cash', 'card'])
    .nonNullable()
    .required('Please select payment method'),
  note: yup.string().max(300, 'Note cannot be longer then 300 letters'),
});

const paymentOptions = [
  {
    label: 'Cash',
    value: 'cash',
  },
  {
    label: 'Card',
    value: 'card',
  },
];

export function CheckoutScreen({ navigation }) {
  const cart = useCart();
  const theme = useTheme();
  const createOrder = useCreateOrder();
  const formik = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      name: '',
      address: '',
      phone: '',
      payment: null,
      note: '',
    },
    // validationSchema,
    onSubmit: () => {
      const data = cart.map(order => ({
        bowlId: null,
        sizeId: `${order.size.id}`,
        baseId: `${order.base.id}`,
        sauceId: `${order.sauce.id}`,
        ingredients: order.ingredients.map(ingredient => `${ingredient.id}`),
        extraIngredients: order.extraIngredients.map(
          ingredient => `${ingredient.id}`,
        ),
      }));

      createOrder(data).then(() => {
        navigation.goBack();
        navigation.navigate(TabRoutes.Home, { data: new BowlData() });
      });
    },
  });

  return (
    <ScreenWrapper>
      <Title>Delivery details</Title>
      <ScrollView bounces={false}>
        <Card>
          <Input
            onBlur={formik.handleBlur('name')}
            onChangeText={formik.handleChange('name')}
            label="Full name"
            required
            placeholder={'Enter your full name'}
            error={formik.errors.name}
          />
          <Input
            onBlur={formik.handleBlur('address')}
            onChangeText={formik.handleChange('address')}
            label="Address"
            required
            placeholder="e.g 24 Main street, LA"
            error={formik.errors.address}
          />
          <Input
            onBlur={formik.handleBlur('phone')}
            onChangeText={formik.handleChange('phone')}
            label="Phone number"
            required
            placeholder="e.g. +61 434561230"
            error={formik.errors.phone}
          />
          <SelectInput
            options={paymentOptions}
            label="Cash or card"
            placeholder="Choose a payment method"
            selectedValue={formik.values.payment}
            onChange={value => formik.setFieldValue('payment', value, true)}
            required
            error={formik.errors.payment as string}
          />
          <Input
            onBlur={formik.handleBlur('note')}
            onChangeText={formik.handleChange('note')}
            label="Note"
            multiline
            height={150}
            placeholder={'Write a note'}
            error={formik.errors.note}
          />
        </Card>

        <OrderSummary cart={cart} />
      </ScrollView>
      <BackButton
        label="Back to Cart"
        onPress={() => navigation.navigate(CartRoutes.Cart)}
      />
      <OrderButton
        background={theme.colors.primary}
        label="Place Order"
        onPress={formik.handleSubmit}
      />
    </ScreenWrapper>
  );
}

const Title = styled(Headline)`
  margin-bottom: 20px;
`;

const Input = styled(TextInput)`
  margin-bottom: 20px;
`;

const SelectInput = styled(Select)`
  margin-bottom: 20px;
`;

const BackButton = styled(SecondaryButton)`
  margin-top: 30px;
`;

const OrderButton = styled(PrimaryButton)`
  margin-top: 15px;
`;
