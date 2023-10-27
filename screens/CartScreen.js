import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { Items, pizza } from "../components/itemrow";
import BackButton from "../components/backbutton";

export default function Cart() {
  const item = pizza;
  console.log(item);
  return (
    <View style={{ backgroundColor: "#EEE" }}>
      <BackButton />
      <Text style={styles.title}>Your Cart</Text>
      <ScrollView pagingEnabled>
        {item.map((fooditem, index) => {
          return (
            <View key={index} style={styles.cartitem}>
              <Image
                style={{
                  height: 50,
                  width: 50,
                }}
                source={require("../assets/images/ExamplePizza.png")}
              />
              <Text style={styles.cartname}>2 x {fooditem.name}</Text>
            </View>
          );
        })}
      </ScrollView>
      <View
        style={{ flexDirection: "row", alignSelf: "center", marginTop: 20 }}
      >
        <TouchableOpacity>
          <View style={styles.deliverybutton}>
            <Text style={styles.deliverytext}>Delivery</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.deliverybutton}>
            <Text style={styles.deliverytext}>Pickup</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    marginTop: 50,
    marginBottom: 20,
    marginLeft: 15,
    fontFamily: "LouisGeorgeCafeBold",
    fontSize: 40,
  },
  deliverytext: {
    color: "#FFF",
    fontFamily: "lemonmilk",
    fontSize: 18,
    textAlign: "center",
  },
  deliverybutton: {
    backgroundColor: "#C00",
    padding: 15,
    width: 180,
    borderRadius: 30,
    marginHorizontal: 3,
  },
  cartitem: {
    margin: 5,
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 20,
    backgroundColor: "#FFF",
    shadowOpacity: "100%",
    shadowOffset: {
      height: 1,
    },
    shadowColor: "#CCC",
    flexDirection: "row",
    alignItems: 'center',
  },
  cartname: {
    fontFamily: "LouisGeorgeCafe",
    fontSize: 16,
    marginLeft: 10,
  },
});
