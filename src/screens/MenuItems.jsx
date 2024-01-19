import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { colors } from "../utils/themes";
import { SplashScreen } from "expo";
import React from "react";
// import { TouchableOpacity } from "react-native-web";
const green = "#495ES7";
const yellow = "#F4CE14";

const menuItem = [
  // "\n Hummus \n Falafel \n Marinated Olives \n Kofta \n Egg Plant Salad \n Lenten Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Stick \n Pita Pockets \n Lenten Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Penna Cotta ",
  {
    id: "1",
    dishName: "Hummus",
    price: "$10",
    dishImage:
      "https://images.pexels.com/photos/6309781/pexels-photo-6309781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "2",
    dishName: "Falafel",
    price: "$8",
    dishImage:
      "https://www.shutterstock.com/image-photo/falafel-balls-on-wooden-cutting-260nw-1927546568.jpg",
  },
  {
    id: "3",
    dishName: "Marinated Olives",
    price: "$12",
    dishImage:
      "https://as1.ftcdn.net/v2/jpg/06/17/39/16/1000_F_617391664_UkCs5kMmtvg4um9VrjX75oLiYLi7zXod.jpg",
  },
  {
    id: "4",
    price: "$9",
    dishName: "Kofta",
    dishImage:
      "https://www.shutterstock.com/image-photo/malai-kofta-curry-mughlai-special-260nw-1252379662.jpg",
  },
  {
    id: "5",
    dishName: "Egg Plant Salad",
    price: "$9",
    dishImage:
      "https://media.istockphoto.com/id/605766670/photo/traditional-caucasian-saute-from-stewed-eggplants.jpg?s=612x612&w=0&k=20&c=Jpl3pMOnsBOKJwzYah4lt6vYe3_utcX_1PziKXRxElw=",
  },
  {
    id: "6",
    dishName: "Lenten Burger",
    price: "$4",
    dishImage:
      "https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg",
  },
  {
    id: "7",
    dishName: "Smoked Salmon",
    price: "$8",
    dishImage:
      "https://images.pexels.com/photos/9671541/pexels-photo-9671541.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: "8",
    dishName: "Kofta Burger",
    price: "$9",
    dishImage:
      "https://weekendatthecottage.com/wp-content/uploads/2023/08/Grilled-Kofta-Burgers-10-1024x682.jpeg",
  },
  {
    id: "9",
    dishName: "Turkish Kebab",
    price: "$10",
    dishImage:
      "https://www.shutterstock.com/image-photo/lula-kebab-spicy-vegetables-turkish-260nw-1501677986.jpg",
  },
  {
    id: "10",
    dishName: "Fries",
    price: "$2",
    dishImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWii-up5PUcPqJ9emebfVb_MoFMSZTPphgXduQSnhq_w&s",
  },
  {
    id: "11",
    dishName: "Buttered Rice",
    price: "$4",
    dishImage:
      "https://img.freepik.com/free-photo/indian-butter-chicken-black-bowl-black-background_123827-20757.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704931200&semt=ais",
  },
  {
    id: "12",
    dishName: "Bread Stick",
    price: "$3",
    dishImage:
      "https://media.istockphoto.com/id/804846708/photo/bread-sticks.webp?b=1&s=612x612&w=0&k=20&c=hTiYvVxaLYQg8WowPZ69vEmMIlX1Bu-sobb2SEDnvJA=",
  },
  {
    id: "13",
    dishName: "Pita Pockets",
    price: "$5",
    dishImage:
      "https://media.istockphoto.com/id/1171166690/photo/pita-stuffed-chicken-tomatoes-lettuce-and-cucumber.jpg?s=612x612&w=0&k=20&c=Ug5OchzgpRS9RkAduZFSWOeH9xczCsrJaxbVUoqbDqQ=",
  },
  {
    id: "14",
    dishName: "Lenten Soup",
    price: "$2",
    dishImage:
      "https://pinchofyum.com/wp-content/uploads/Smoky-Red-Lentil-Stew-2.jpg",
  },
  {
    id: "15",
    dishName: "Greek Salad",
    price: "$1",
    dishImage:
      "https://www.shutterstock.com/image-photo/classic-greek-salad-fresh-vegetables-260nw-1911406540.jpg",
  },
  {
    id: "16",
    dishName: "Baklava",
    price: "$8",
    dishImage:
      "https://media.istockphoto.com/id/1195774604/photo/walnut-pistachio-turkish-style-antep-baklava-presentation-baklava-from-turkish-cuisine.jpg?s=612x612&w=0&k=20&c=-1R--ikfVod4vV1FBQE3PCRILdOK1ahwPCzqCM87qYE=",
  },
  {
    id: "17",
    dishName: "Rice Pilaf",
    price: "$3",
    dishImage:
      "https://media.istockphoto.com/id/1366821971/photo/traditional-delicious-turkish-food-turkish-style-rice-pilaf.jpg?s=612x612&w=0&k=20&c=q5nkxjnzR-wJuZpB2Gm233w3GeASVe_T3LxgwieK78o=",
  },
  {
    id: "18",
    dishName: "Pena Cotta",
    price: "$2",
    dishImage:
      "https://images.pexels.com/photos/10134248/pexels-photo-10134248.jpeg",
  },
];
const MenuItems = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.menuTitle}>Our Menu</Text>
      <SafeAreaView />
      <FlatList
        data={menuItem}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.flatListCon}>
              <Image source={{ uri: item.dishImage }} style={styles.image} />
              <Text style={styles.itemPrice}>{item.price}</Text>
              <Text style={styles.name}>{item.dishName}</Text>
            </View>
          </TouchableOpacity>
        )}
        numColumns={1}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      />
    </View>
  );
};

export default MenuItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  menuTitle: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 5,
    color: colors.primary,
    textAlign: "center",
  },
  menuItem: {
    flex: 1,
    margin: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
  },

  itemPrice: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },

  flatListCon: {
    backgroundColor: colors.primary,
    marginVertical: 10,
    marginHorizontal: 10,
    borderEndEndRadius: 10,
    borderRadius: 40,
  },
  image: {
    height: 250,
    borderRadius: 8,
  },
  badge: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  badgeText: {
    fontSize: 25,
    color: "white",
  },
  name: {
    fontSize: 30,
    textAlign: "center",
    borderWidth: 2,
    backgroundColor: "grey",

    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderEndEndRadius: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "grey",
  },
});
