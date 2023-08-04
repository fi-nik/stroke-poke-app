import { useCallback } from 'react';
import { FlatList } from 'react-native';
import { LocationItem } from 'screens/Locations/LocationItem';
import { ScreenWrapper } from 'src/components/ScreenWrapper';
import { ArrowLeftIcon } from 'src/components/icons/ArrowLeft';
import { Flex } from 'src/components/layout';
import { Headline } from 'src/components/text/Headline';
import { AppRoutes } from 'src/router/types';
import styled from 'styled-components/native';

const locations = [
  { id: 0, town: 'Los Angeles', address: '3705 Felosa Drive' },
  { id: 1, town: 'Los Angeles', address: '260 Sumner Street' },
  { id: 2, town: 'San Francisco', address: '4954 Thompson Drive' },
  { id: 3, town: 'Oakland', address: '1819 Clifford Street' },
];

export function LocationsScreen({ navigation }) {
  const renderItem = useCallback(
    ({ item }) => (
      <Location>
        <LocationItem id={item.id} town={item.town} address={item.address} />
      </Location>
    ),
    [],
  );

  return (
    <Flex>
      <Header>
        <HeaderContent>
          <BackButton onPress={() => navigation.navigate(AppRoutes.Tab)}>
            <ArrowLeftIcon />
          </BackButton>
        </HeaderContent>
      </Header>
      <ScreenWrapper>
        <ScreenTitle>Our locations</ScreenTitle>
        <FlatList data={locations} renderItem={renderItem} />
      </ScreenWrapper>
    </Flex>
  );
}

const Header = styled.SafeAreaView`
  width: 100%;
  padding-left: 10px;
  justify-content: space-between;
  background-color: white;
`;

const HeaderContent = styled.SafeAreaView`
  width: 100%;
  height: 40px;
  justify-content: space-between;
`;

const BackButton = styled.TouchableOpacity`
  padding: 4px;
`;

const ScreenTitle = styled(Headline)`
  margin-bottom: 20px;
`;

const Location = styled.View`
  margin-bottom: 15px;
`;
