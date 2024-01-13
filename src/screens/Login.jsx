import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
// import navigation from "@react-navigation/native";
// import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import Home from "./home";
import { Icon } from "@rneui/themed";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const handleLogin = () => {
    console.log("Logging in:", email);
  };
  function handlePasswordShow() {
    if (showPass == true) {
      setShowPass(false);
    } else {
      setShowPass(true);
    }
  }
  function home() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.register}>Login</Text>
      <Image
        source={require("../../assets/logo.jpg")}
        // source={{
        // uri: "https://img.freepik.com/premium-vector/hotel-logo-design_423075-16.jpg",
        // }}
        style={styles.logo}
      />
      <View style={[styles.inputConn, { flexDirection: "row" }]}>
        <Icon name="email" size={25} color="grey" />
        <TextInput
          placeholder="Enter your Email"
          style={{ width: "90%", fontSize: 16, marginLeft: 6 }}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={[styles.inputConn, { flexDirection: "row" }]}>
        <Icon name="lock" size={25} color="grey" />
        <TextInput
          placeholder="Enter Your Password"
          secureTextEntry={!showPass}
          onChangeText={(text) => setPassword(text)}
          style={{ width: "90%", fontSize: 16, marginLeft: 6 }}
        />
        <Feather
          name={showPass ? "eye-off" : "eye"}
          size={25}
          color="grey"
          marginLeft={-30}
          onPress={handlePasswordShow}
          style={styles.feather}
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={home}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 70,
  },
  feather: {},
  inputConn: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginVertical: 15,
    padding: 6,
    backgroundColor: "#fff",
  },
  register: {
    fontSize: 40,
    fontWeight: "bold",
  },
  loginButton: {
    backgroundColor: "#3498db",
    width: "80%",
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 150,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default Login;
