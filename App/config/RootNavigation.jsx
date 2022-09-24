import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AuthStackScreen from "./AuthStack";
import ManagementStackScreen from "./ManagementStack";
import { AppBar } from "@react-native-material/core";
import SalesStackScreen from "./SalesStack";

const Drawer = createDrawerNavigator();
const DrawerScreen = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: { color: "#007C5B" },
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name="Management" component={ManagementStackScreen} />
      <Drawer.Screen name="Sales" component={SalesStackScreen} />
    </Drawer.Navigator>
  );
};

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <DrawerScreen />
    </NavigationContainer>
  );
};

export default RootNavigation;
