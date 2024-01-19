//  "@react-native-async-storage/async-storage": "1.18.2",
//  "undefined": "react-native-firebase/auth",
// "@react-native-community/viewpager": "5.0.11"
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import Home from "./home";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Icon } from "@rneui/themed";

export default function Register({ navigation }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  function handlePasswordShow() {
    if (showPass == true) {
      setShowPass(false);
    } else {
      setShowPass(true);
    }
  }
  const register = async () => {
    // function register() {
    if (!userName || !email || !gender || !password) {
      Alert.alert("All fields are required");
      return;
    }

    // Store the user information
    const user = {
      userName,
      email,
      gender,
      password,
    };
    console.log(
      "User Name:" +
        userName +
        " Email: " +
        email +
        " Gender: " +
        gender +
        " Password: " +
        password
    );
    setUserName("");
    setEmail("");
    setGender("");
    setPassword("");

    navigation.navigate("Home");
  };

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
            value={userName}
            onChangeText={setUserName}
            placeholder="Enter your Name"
            style={{ width: "90%", fontSize: 16, marginLeft: 6 }}
          />
        </View>
        <View style={[styles.inputConn, { flexDirection: "row" }]}>
          <Icon name="email" size={25} color="grey" />
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your Email"
            style={{ width: "90%", fontSize: 16, marginLeft: 6 }}
          />
        </View>
        <View style={[styles.inputConn, { flexDirection: "row" }]}>
          <Icon name="person" size={25} color="grey" />
          <TextInput
            value={gender}
            onChangeText={setGender}
            placeholder="Enter your Gender"
            style={{ width: "90%", fontSize: 16, marginLeft: 6 }}
          />
        </View>
        <View style={[styles.inputConn, { flexDirection: "row" }]}>
          <Icon name="lock" size={25} color="grey" />
          <TextInput
            secureTextEntry={!showPass}
            value={password}
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
        <TouchableOpacity onPress={login}>
          <Text style={styles.touchButton}>
            Already have an account!
            <Text style={{ color: "blue", fontSize: 18 }}> goToLogin</Text>
          </Text>
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
  touchButton: {
    marginTop: 20,
    color: "grey",
    fontSize: 15,
  },
});
