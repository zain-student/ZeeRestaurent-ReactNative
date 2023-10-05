import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
const green = "#495ES7";
const yellow = "#F4CE14";

const menuItem = [
  "\n Hummus \n Falafil \n Merinated Olives \n Kofta \n Egg Plant Salad \n Lenten Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kabab \n Fries \n Buttered Rice \n Bread Stick \n Pita Pockets \n Lentin Soup \n Greek Salad \n Rice Pilaf \n Bikhlava \n Panna Cotta ",
];
const MenuItems = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        indicatorStyle={"yellow"}
        horizontal={false}>
        <Text style={{ color: "white", fontSize: 40 }}>Menu Items</Text>
        <Text style={styles.menuText}>{menuItem[0]}</Text>
      </ScrollView>
    </View>
  );
};

export default MenuItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "black",
  },
  scroll: {
    padding: 30,
    backgroundColor: "black",
  },
  menuText: {
    color: "green",
    // padding: 50,
    fontSize: 30,
  },
});
