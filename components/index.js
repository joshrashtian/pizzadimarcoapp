import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Welcome from "../screens/Welcome";
import UserSettings from "../screens/UserSettings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import Icon from "react-native-ico-material-design";
import Category from "../screens/Category";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

var naviconHeight = 26;
var naviconWidth = 26;

export const BottomRow = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
        },
        tabBarLabelStyle: {
          alignContent: "center",
          fontFamily: 'lemonmilk',
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ title: "Menu" }}
      />
      <Tab.Screen
        name="UserSettings"
        component={UserSettings}
        options={{ title: "Profile" }}
      />
    </Tab.Navigator>
  );
};

function Layout() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="App"
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="App" component={BottomRow} />
        <Stack.Screen name="Category" component={Category}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Layout;
