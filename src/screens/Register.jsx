import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
// import MenuItems from "./MenuItems";
import Home from "./home";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
// import navigation from "@react-navigation/native";
// import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
// import { colors, fonts } from "../utils/themes";
// import { Button, useThemeMode } from "@rneui/themed";

export default function Register({ navigation }) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState();
  const [password, setPassword] = useState(true);
  const [showPass, setShowPass] = useState(false);

  function handlePasswordShow() {
    if (showPass == true) {
      setShowPass(false);
    } else {
      setShowPass(true);
    }
  }

  function register() {
    navigation.navigate("Home");
  }
  function login() {
    navigation.navigate("Login");
  }
  return (
    <ScrollView>
      <SafeAreaView />
      <View style={styles.container}>
        <Text style={styles.register}>Register</Text>
        <View style={[styles.inputConn, { flexDirection: "row" }]}>
          <Icon name="person" size={25} color="grey" />
          <TextInput
            onChangeText={setFirstName}
            placeholder="Enter Your FirstName "
            style={{ width: "90%", fontSize: 16, marginLeft: 6 }}
          />
        </View>
        <View style={[styles.inputConn, { flexDirection: "row" }]}>
          <Icon name="person" size={25} color="grey" />
          <TextInput
            onChangeText={setLastName}
            placeholder="Enter your LastName"
            style={{ width: "90%", fontSize: 16, marginLeft: 6 }}
          />
        </View>
        <View style={[styles.inputConn, { flexDirection: "row" }]}>
          <Icon name="email" size={25} color="grey" />
          <TextInput
            onChangeText={setEmail}
            placeholder="Enter your Email"
            style={{ width: "90%", fontSize: 16, marginLeft: 6 }}
          />
        </View>
        <View style={[styles.inputConn, { flexDirection: "row" }]}>
          <Icon name="person" size={25} color="grey" />
          <TextInput
            onChangeText={setGender}
            placeholder="Enter your Gender"
            style={{ width: "90%", fontSize: 16, marginLeft: 6 }}
          />
        </View>
        <View style={[styles.inputConn, { flexDirection: "row" }]}>
          <Icon name="lock" size={25} color="grey" />
          <TextInput
            secureTextEntry={!showPass}
            onChangeText={setPassword}
            placeholder="Enter Your Password"
            style={{ width: "90%", fontSize: 16, marginLeft: 6 }}
          />
          <Feather
            name={showPass ? "eye-off" : "eye"}
            size={25}
            color="grey"
            marginLeft={-30}
            onPress={handlePasswordShow}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={register}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    flex: 1,
    marginTop: 80,
    // padding: 5,
  },

  inputConn: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginVertical: 10,
    padding: 5,
    backgroundColor: "#fff",
  },
  register: {
    fontSize: 40,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#3498db",
    width: "80%",
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});
