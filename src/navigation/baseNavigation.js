import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MenuItems from "../screens/MenuItems";
import Welcome from "../screens/Welcome";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const BaseStack = createNativeStackNavigator();
function BaseNavigation() {
  return (
    <NavigationContainer>
      <BaseStack.Navigator
        initialRouteName="Welcome"
        screenOption={{
          headerTitleStyle: {
            color: "blue",
          },
          headerSearchBarOption: {
            placeHolder: "SearchMe",
          },
        }}>
        <BaseStack.Screen name="Menu" component={MenuItems} />
        <BaseStack.Screen name="Welcome" component={Welcome} />
      </BaseStack.Navigator>
    </NavigationContainer>
  );
}

export { BaseNavigation };

const styles = StyleSheet.create({});
