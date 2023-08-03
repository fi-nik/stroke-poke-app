import { CardContent } from 'src/components/CardContent';
import { Body } from 'src/components/text/Body';
import { BowlData } from 'src/types';

export function BowlOrderContent({
  size,
  sauce,
  base,
  ingredients,
  extraIngredients,
}: BowlData) {
  return (
    <CardContent>
      <Body>{`${size.name} size`}</Body>
      <Body>{`${base.name} rice`}</Body>
      <Body>{sauce.name}</Body>
      <Body>{ingredients.map(i => i.name).join(', ')}</Body>
      {extraIngredients.map(i => (
        <Body key={i.id}>{i.name}</Body>
      ))}
    </CardContent>
  );
}
