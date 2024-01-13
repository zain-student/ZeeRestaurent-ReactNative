import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MenuItems from "../screens/MenuItems";
import Welcome from "../screens/Welcome";
import Register from "../screens/Register";
import Login from "../screens/Login";
import home from "../screens/home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
// import * as SplashScreen from "expo-splash-screen";
// import SplashScreen from "react-native-splash-screen";
// import { SplashScreen } from "expo";
const BaseStack = createNativeStackNavigator();
function BaseNavigation() {
  // SplashScreen.preventAutoHideAsync();
  // setTimeout(SplashScreen.hideAsync, 9000);
  return (
    <NavigationContainer>
      <BaseStack.Navigator initialRouteName="Welcome">
        <BaseStack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerTitleAlign: "center",
            headerTintColor: "grey",
          }}
        />
        <BaseStack.Screen
          name="Register"
          component={Register}
          options={{ headerTitleAlign: "center", headerTintColor: "grey" }}
        />
        <BaseStack.Screen
          name="Login"
          component={Login}
          options={{ headerTitleAlign: "center", headerTintColor: "grey" }}
        />
        <BaseStack.Screen
          name="Home"
          component={Home}
          options={{ headerTitleAlign: "center", headerTintColor: "grey" }}
        />
        <BaseStack.Screen
          name="MenuItems"
          component={MenuItems}
          options={{
            headerTitleAlign: "center",
            headerTintColor: "grey",
            headerSearchBarOptions: { placeholder: "Search Me" },
          }}
        />
      </BaseStack.Navigator>
    </NavigationContainer>
  );
}

export { BaseNavigation };

const styles = StyleSheet.create({});
