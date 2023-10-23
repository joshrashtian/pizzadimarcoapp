import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import Icon from "react-native-ico";
import { useNavigation } from "@react-navigation/native";

export default function Item() {
  const navigation = useNavigation();
  const { params } = useRoute();
  let item = params;
  console.log(params);
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <View style={styles.backbutton}>
          <Icon name="clear-button" color="#AAA" />
        </View>
      </TouchableOpacity>
      <Image
        style={{
          height: 200,
          width: 200,
          alignSelf: "center",
          marginBottom: 10,
        }}
        source={require("../assets/images/ExamplePizza.png")}
      />
      <ScrollView style={styles.container}>
        <Text
          style={{
            fontSize: 40,
            fontFamily: "LouisGeorgeCafeBold",
            textAlign: "center",
            marginTop: 20,
          }}
        >
          {params.name}
        </Text>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "LouisGeorgeCafe",
            textAlign: "center",
          }}
        >
          {params.price}
        </Text>
        <View style={styles.descriptioncontainer}>
          <Text style={{ fontFamily: "LouisGeorgeCafe" }}>
            Our take on a classic italian favorite.
          </Text>
        </View>
        <View style={{ alignSelf: "center", flexDirection: "row" }}>
        <TouchableOpacity>
            <View style={[styles.cartbutton, { backgroundColor: "#CCC" }]}>
              <Icon
                name="minus"
                color="#FFF"
                group="pixel"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={[styles.cartbutton, { flexDirection: "row", width: 180 }]}
            >
              <Icon name="shopping-cart" color="#FFF" group="material-design" />
              <Text
                style={{
                  fontFamily: "lemonmilk",
                  color: "#FFF",
                  marginLeft: 10,
                }}
              >
                Add To Cart
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={[styles.cartbutton, { backgroundColor: "#CCC" }]}>
              <Icon
                name="add-plus-button"
                color="#FFF"
                group="material-design"
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    paddingBottom: 550,
    borderRadius: 30,
  },
  cartbutton: {
    backgroundColor: "#55E",
    padding: 10,
    margin: 3,
    borderRadius: 15,
    verticalAlign: "middle",
    alignItems: "center",
  },
  backbutton: {
    position: "absolute",
    padding: 7,
    margin: 10,
  },
  descriptioncontainer: {
    backgroundColor: "#EEE",
    padding: 30,
    marginHorizontal: 25,
    marginVertical: 15,
    borderRadius: 30,
  },
});
