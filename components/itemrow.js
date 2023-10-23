import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";

import React from "react";
import { ItemComponent } from "./item";

export function Items() {

  const pizza = [
    { id: 1, name: "Cheese", price: "$29.99", image: "" },
    { id: 2, name: "Pepperoni", price: "$19.99", image: "" },
    { id: 3, name: "Margarita", price: "$14.99", image: "" },
    { id: 4, name: "BBQ Chicken", price: "$14.99", image: "" },
    { id: 5, name: "Vegetarian", price: "$9.99", image: "./images/ExamplePizza.png"}
  ];
  
    return (
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        >
          {pizza.map((item, index) => {
            return (
              <ItemComponent
                item={item}
                name={item.name}
                price={item.price}
                key={item.id}
                image={item.image}
              />
            );
          })}
        </ScrollView>
      </View>
    )
  }

const styles = StyleSheet.create({
  exterior: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#EEE",
  },
});
