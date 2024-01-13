import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import navigation from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
// import MenuItems from "./MenuItems";
const Welcome = () => {
  const navigation = useNavigation();
  function goToRegister() {
    navigation.navigate("Register");
  }
  return (
    <View style={{ alignItems: "center" }}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1530554764233-e79e16c91d08?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMGJsYWNrfGVufDB8fDB8fHww",
        }}
        style={styles.backgroundImage}>
        <ScrollView indicatorStyle={"black"} style={{ flex: 1 }}>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 60,
                marginTop: 40,
                marginLeft: 15,
                color: "yellow",
              }}>
              Welcome!
            </Text>
            <Text
              style={{
                marginTop: 30,
                fontSize: 40,
                textAlign: "center",
                color: "white",
              }}>
              Zee Hotel is a well known Hotel by Double Zee hotels.We serve
              simple food and classic cocktails in a lively but casual
              environment. We would love to hear more about your experience with
              us!
            </Text>
            <TouchableOpacity style={styles.button} onPress={goToRegister}>
              <Text style={styles.buttonText}>Sign Up</Text>
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
      </ImageBackground>
    </View>
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
    marginLeft: 15,
  },
  backgroundImage: { padding: 6 },
  buttonText: {
    color: "white",
    fontSize: 40,
  },
});
