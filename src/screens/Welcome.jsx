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
// ===============================================================
// import React, { useCallback, useEffect, useState } from "react";
// import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
// import Entypo from "@expo/vector-icons/Entypo";
// import * as SplashScreen from "expo-splash-screen";
// import * as Font from "expo-font";

// // Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();
// await SplashScreen.hideAsync(300);
// // setTimeout(SplashScreen.hideAsync, 3000);
// export default function App() {
//   const [appIsReady, setAppIsReady] = useState(false);

//   useEffect(() => {
//     async function prepare() {
//       try {
//         // Pre-load fonts, make any API calls you need to do here
//         await Font.loadAsync(Entypo.font);
//         // Artificially delay for two seconds to simulate a slow loading
//         // experience. Please remove this if you copy and paste the code!
//         await new Promise((resolve) => setTimeout(resolve, 2000));
//       } catch (e) {
//         console.warn(e);
//       } finally {
//         // Tell the application to render
//         setAppIsReady(true);
//       }
//     }

//     prepare();
//   }, []);

//   const onLayoutRootView = useCallback(async () => {
//     if (appIsReady) {
//       // This tells the splash screen to hide immediately! If we call this after
//       // `setAppIsReady`, then we may see a blank screen while the app is
//       // loading its initial state and rendering its first pixels. So instead,
//       // we hide the splash screen once we know the root view has already
//       // performed layout.
//   // await SplashScreen.hideAsync(300);
//     }
//   }, [appIsReady]);

//   if (!appIsReady) {
//     return null;
//   }

//   return (
//     <View
//       style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
//       onLayout={onLayoutRootView}>
//       <Image
//         source={require("../../assets/splash.png")}
//         style={styles.splash}
//       />
//       {/* <Text>SplashScreen Demo! 👋</Text> */}
//       {/* <Entypo name="rocket" size={30} /> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   splash: {
//     width: "100%",
//     // height: Dimensions.get("window").height * 0.9,
//     height: "100%",
//   },
// });
