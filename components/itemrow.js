import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import categories from "./categorydata";
import React from "react";

export function Items(name, price) {
  const examples = [
    { name: "Pizza", price: "$50", image: "" },
    { name: "BBQ Chicken", price: "$20", image: "" },
  ];

  return (
    <View>
      <ScrollView
      horizontal={true}
      
      >
        {examples.map((item, index) => (
          <TouchableOpacity>
            <View key={index} style={styles.categories2}>
              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  exterior: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#EEE",
  },
  categories2: {
    alignContent: "center",
    marginVertical: 3,
    padding: 20,
    paddingHorizontal: 40,
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowOffset: { height: 2 },
    shadowColor: "#AAA",
    shadowOpacity: "100%",
  },
});
