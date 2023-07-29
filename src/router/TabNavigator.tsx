import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Logo } from "src/components/Logo";
import { Cart } from "src/screens/Cart";
import { Favorites } from "src/screens/Favorites";
import { Home } from "src/screens/Home";
import { useTheme } from "styled-components";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation }) => ({
        headerTitle: "",
        headerLeft: () => (
          <MaterialCommunityIcons
            onPress={() => navigation.toggleDrawer()}
            name="menu"
            size={26}
            color={theme.colors.primary}
          />
        ),
        headerLeftContainerStyle: { paddingLeft: 12 },
        headerRight: () => <Logo />,
        headerRightContainerStyle: { paddingRight: 12 },
        tabBarActiveTintColor: theme.colors.primary,
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="star-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cart-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
