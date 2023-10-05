import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import navigation from "@react-navigation/native";

const Welcome = () => {
  function menu() {
    navigation.navigate("MenuItems");
  }
  return (
    <>
      <ScrollView indicatorStyle={"black"} style={{ flex: 1 }}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 60, marginTop: 40 }}>
            Welcome!
          </Text>
          <Text style={{ marginTop: 30, fontSize: 40, textAlign: "center" }}>
            Zee Hotel is a well known Hotel by Double Zee Company. This is a
            charming neighbourhood bistro that serves simple food and classic
            cocktails in a lively but casual environment. We would love to hear
            more about your experience with us!
          </Text>
          <TouchableOpacity style={styles.button} onPress={menu}>
            <Text style={styles.buttonText}>Menu</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: "#F4CE14",
          marginBottom: 10,
        }}>
        <Text
          style={{
            fontSize: 18,
            color: "black",
            textAlign: "center",
          }}>
          All rights reserved by Zee Hotel,2022{" "}
        </Text>
      </View>
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    width: "60%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 3,
    borderColor: "black",
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 40,
  },
});
