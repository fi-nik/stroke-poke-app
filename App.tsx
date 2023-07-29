import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { AppNavigator } from "src/router/AppRouter";
import "react-native-gesture-handler";
import { ThemeProvider } from "styled-components/native";

const theme = {
  colors: {
    primary: "#F86060",
    secondary: "yellow",
    white: "#FFF",
    black: "#292838",
  },
};
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppContent />
      </NavigationContainer>
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
    backgroundColor: "#fff",
  },
});
