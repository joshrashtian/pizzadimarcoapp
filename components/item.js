import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export function ItemComponent({item}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={(navigation.navigate("Item", {...item}))}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemtext}>{item.name} Pizza</Text>
        <View style={{flexDirection: 'row-reverse'}}>
          <Text style={styles.itemtext}>{item.price}</Text>
          <View style={{padding: 3, paddingHorizontal: 5, backgroundColor: '#FFEEEE', marginRight: 3, borderRadius: 10}}>
            <Text style={{fontSize: 10}}>M</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    alignContent: "center",
    marginVertical: 3,
    paddingVertical: 15,
    width: 175,
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowOffset: { height: 2 },
    shadowColor: "#AAA",
    shadowOpacity: "100%",
  },
  itemtext: {
    fontFamily: "LouisGeorgeCafe",
    textAlign: "right",
    marginRight: 15,
  },
});
