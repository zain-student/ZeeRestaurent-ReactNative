import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
// import navigation from "@react-navigation/native";
// import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
// import Home from "./home";
import { Icon } from "@rneui/themed";
import firebase from "../screens/config";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const loginUser = async (email, password) => {
    const email1 = "abc123@gmail.com";
    const password1 = "abc123";
    const email2 = "zainmalik123@gmail.com";
    const password2 = "zain123";

    if (!email || !password) {
      Alert.alert("All fields are required");
      return;
    }
    if (
      (email === email1 || email === email2) &&
      (password === password1 || password === password2)
    ) {
      navigation.navigate("Home");
    } else {
      Alert.alert("Invalid Credentials");
    }
    // try {
    //   await firebase.auth().signInWithEmailAndPassword(email, password);
    //   navigation.navigate("Home");
    // } catch (error) {
    //   alert(error.message);
    // }
    setEmail("");
    setPassword("");
  };

  function handlePasswordShow() {
    if (showPass == true) {
      setShowPass(false);
    } else {
      setShowPass(true);
    }
  }

  function register() {
    navigation.navigate("Register");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.register}>Login</Text>
      <Image source={require("../../assets/logo.jpg")} style={styles.logo} />
      <View style={[styles.inputConn, { flexDirection: "row" }]}>
        <Icon name="email" size={25} color="grey" />
        <TextInput
          placeholder="Enter your Email"
          value={email}
          style={{ width: "90%", fontSize: 16, marginLeft: 6 }}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View style={[styles.inputConn, { flexDirection: "row" }]}>
        <Icon name="lock" size={25} color="grey" />
        <TextInput
          value={password}
          placeholder="Enter Your Password"
          secureTextEntry={!showPass}
          onChangeText={setPassword}
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

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          loginUser(email, password);
        }}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={register}>
        {/* style={styles.button} */}
        <Text style={styles.touchButton}>
          Don't have an account!
          <Text style={{ color: "blue", fontSize: 18 }}> goToRegister</Text>
        </Text>
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
    // marginBottom: 150,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  touchButton: {
    marginTop: 20,
    color: "grey",
    fontSize: 15,
    marginBottom: 120,
  },
});

export default Login;
