import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { QueryProvider } from 'src/providers/QuertClientProvider';
import { AppNavigator } from 'src/router/AppRouter';
import 'react-native-gesture-handler';
import { StoreProvider } from 'src/store';
import styled, { ThemeProvider } from 'styled-components/native';

const theme = {
  colors: {
    primary: '#F86060',
    secondary: 'yellow',
    white: '#FFF',
    black: '#292838',
    border: {
      primary: '#E9E8F8',
    },
  },
};

export default function App() {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <QueryProvider>
          <NavigationContainer>
            <AppContent />
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
