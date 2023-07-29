import { createDrawerNavigator } from "@react-navigation/drawer";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { TabNavigator } from "src/router/TabNavigator";
const Drawer = createDrawerNavigator();

function CustomDrawerContent({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => {
          // Navigate using the `navigation` prop that you received
          navigation.navigate("SomeScreen");
        }}
      >
        Go somewhere
      </Button>
    </View>
  );
}
export function AppNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      screenOptions={() => ({
        drawerPosition: "right",
        drawerActiveTintColor: "red",
        headerShown: false,
      })}
    >
      <Drawer.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          drawerLabel: "",
        }}
      />
    </Drawer.Navigator>
  );
}
