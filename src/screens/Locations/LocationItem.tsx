import { Card } from 'src/components/Card';
import { CardTitle } from 'src/components/CardTitle';
import { LocationIcon } from 'src/components/icons/Location';
import { FlexRow } from 'src/components/layout';
import { Body } from 'src/components/text/Body';
import styled from 'styled-components/native';

export function LocationItem({ town, address, id }) {
  return (
    <Card key={id}>
      <CardTitle title={town} />
      <AddressArea>
        <LocationIcon />
        <Address>{address}</Address>
      </AddressArea>
    </Card>
  );
}

const AddressArea = styled(FlexRow)`
  margin-top: 10px;
`;

const Address = styled(Body)`
  margin-left: 10px;
`;
