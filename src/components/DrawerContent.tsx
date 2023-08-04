import { AppRoutes } from 'src/router/types';
import styled from 'styled-components/native';

import { CloseIcon } from './icons/Close';
import { LocationIcon } from './icons/Location';
import { Body } from './text/Body';

export function DrawerContent({ navigation }) {
  return (
    <SafeArea>
      <CloseButton onPress={() => navigation.closeDrawer()}>
        <CloseIcon />
      </CloseButton>
      <Wrapper>
        <DrawerItem onPress={() => navigation.navigate(AppRoutes.Locations)}>
          <LocationIcon />
          <Label>Our locations</Label>
        </DrawerItem>
      </Wrapper>
    </SafeArea>
  );
}
const SafeArea = styled.SafeAreaView`
  flex: 1;
`;
const Wrapper = styled.View`
  flex: 1;
  margin: 120px 30px;
`;

const DrawerItem = styled.TouchableOpacity`
  flex-direction: row;
`;

const Label = styled(Body)`
  margin-left: 10px;
`;

const CloseButton = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  top: 32px;
`;
