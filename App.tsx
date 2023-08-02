import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { AppNavigator } from 'src/router/AppRouter';
import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import { QueryProvider } from 'src/providers/QuertClientProvider';

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
    <ThemeProvider theme={theme}>
      <QueryProvider>
        <NavigationContainer>
          <AppContent />
        </NavigationContainer>
      </QueryProvider>
    </ThemeProvider>
  );
}

const AppContent = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AppNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
