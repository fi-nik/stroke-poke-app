import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { RootSiblingParent } from 'react-native-root-siblings';
import { theme } from 'src/modules/Theme';
import { QueryProvider } from 'src/providers/QuertClientProvider';
import { AppNavigator } from 'src/router/AppRouter';
import 'react-native-gesture-handler';
import { StoreProvider } from 'src/store';
import styled, { ThemeProvider } from 'styled-components/native';

export default function App() {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <QueryProvider>
          <NavigationContainer>
            <RootSiblingParent>
              <AppContent />
            </RootSiblingParent>
          </NavigationContainer>
        </QueryProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}

const AppContent = () => {
  return (
    <Container>
      <StatusBar style="auto" />
      <AppNavigator />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;
