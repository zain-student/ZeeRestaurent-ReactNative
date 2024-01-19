import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import MenuItems from "../screens/MenuItems";
import firebase from "../screens/config";
import Welcome from "../screens/Welcome";
import Register from "../screens/Register";
import Login from "../screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";

const BaseStack = createNativeStackNavigator();
function BaseNavigation() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  //Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  if (initializing) return null;

  if (!user) {
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
              // headerSearchBarOptions: { placeholder: "Search Me" },
            }}
          />
        </BaseStack.Navigator>
      </NavigationContainer>
    );
  }
}
export { BaseNavigation };

const styles = StyleSheet.create({});
