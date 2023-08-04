import { useNavigation } from '@react-navigation/native';
import { Card } from 'src/components/Card';
import { CardContent } from 'src/components/CardContent';
import { CardTitle } from 'src/components/CardTitle';
import { PrimaryButton } from 'src/components/button/PrimaryButton';
import { Body } from 'src/components/text/Body';
import {
  CartRoutes,
  CartStackScreenNavigationProp,
  TabRoutes,
} from 'src/router/types';
export function EmptyCart() {
  const navigation =
    useNavigation<
      CartStackScreenNavigationProp<TabRoutes.Cart, CartRoutes.Cart>
    >();
  return (
    <Card>
      <CardTitle title="No order added" />
      <CardContent>
        <Body>
          You haven't selected any bowl yet, go pick one of you favorite meal
        </Body>
      </CardContent>
      <PrimaryButton
        label="Add order "
        onPress={() => navigation.navigate(TabRoutes.Home)}
      />
    </Card>
  );
}
