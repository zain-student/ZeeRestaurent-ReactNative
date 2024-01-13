import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  const bannerImageUrl =
    "https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?w=740&t=st=1705129458~exp=1705130058~hmac=4fd1465bc54ac43cbd5e33b86c2ea85c1aaa93afa988883cac2f34b6b856808e";
  return (
    <View style={styles.container}>
      <View style={styles.bannerContent}>
        <Text style={styles.bannerText}>Welcome to our</Text>
        <Text style={styles.restaurantName}>Double Zee Restaurant</Text>
      </View>
      <ImageBackground
        source={{ uri: bannerImageUrl }}
        style={styles.banner}
        resizeMode="cover"></ImageBackground>
      <TouchableOpacity
        style={styles.viewMenuButton}
        onPress={() => navigation.navigate("MenuItems")}>
        <Text style={styles.buttonText}>View Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

// const styles = StyleSheet.create({});
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: "100%",
    height: 250,
    borderRadius: 20,
    marginTop: 10,
  },
  bannerContent: {
    backgroundColor: "tomato",
    padding: 30,
    borderRadius: 8,
    marginTop: 20,
  },
  bannerText: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
    marginLeft: 10,
  },
  restaurantName: {
    fontSize: 50,
    color: "white",
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20,
  },
  viewMenuButton: {
    backgroundColor: "#FF6347",
    padding: 15,
    borderRadius: 8,
    marginBottom: 40,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 40,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
