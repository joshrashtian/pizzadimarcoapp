import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Items, pizza } from "../components/itemrow";
import BackButton from "../components/backbutton";

export default function Cart() {
  const item = pizza[0];
  return (
    <View>
      <BackButton />
      <Text style={styles.title}>Your Cart</Text>
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
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
    marginLeft: 15,
    fontFamily: "LouisGeorgeCafeBold",
    fontSize: 40,
  },
  deliverytext: {
    color: '#FFF',
    fontFamily: 'lemonmilk',
    fontSize: 18,
    textAlign: 'center',
  },
  deliverybutton: {
    backgroundColor: "#C00",
    padding: 15,
    width: 180,
    borderRadius: 30,
    marginHorizontal: 3,
  }
});
