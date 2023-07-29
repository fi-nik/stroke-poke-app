import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Logo } from "src/components/Logo";
import { CartIcon } from "src/components/icons/cart";
import { FavoriteIcon } from "src/components/icons/favorites";
import { HomeIcon } from "src/components/icons/home";
import { MenuIcon } from "src/components/icons/menu";
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
        tabBarLabelStyle: { paddingTop: 0 },

        headerLeft: () => (
          <MenuIcon onPress={() => navigation.toggleDrawer()} />
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
          tabBarIcon: ({ color }) => <HomeIcon fill={color} />,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color }) => <FavoriteIcon fill={color} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color }) => <CartIcon fill={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
