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
import BackButton from "../components/backbutton";

export default function Item() {
  const navigation = useNavigation();
  const { params } = useRoute();
  let item = params;
  console.log(params);
  return (
    <SafeAreaView style={{ backgroundColor: '#FFF'}}>
      
      <ScrollView style={styles.container}>

      <BackButton />

      <Image
        style={{
          height: 200,
          width: 200,
          alignSelf: "center",
          marginTop: 30,
        }}
        source={require("../assets/images/ExamplePizza.png")}
      />
        <Text
          style={{
            fontSize: 40,
            fontFamily: "LouisGeorgeCafeBold",
            textAlign: "center",
            marginTop: 10,
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
          <View style={[styles.cartbutton, {backgroundColor: '#FFF'}]}>
            <Text style={{fontFamily: 'lemonmilk', backgroundColor: '#FFF'}}>0</Text>
          </View>
          <TouchableOpacity>
            <View style={[styles.cartbutton, { backgroundColor: "#CCC" }]}>
              <Icon
                name="add-plus-button"
                color="#FFF"
                group="material-design"
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
        </View>
        <TouchableOpacity style={styles.checkoutbutton} onPress={() => navigation.navigate('Cart')}>
                <Text style={{fontFamily: 'lemonmilk', color: '#FFF', fontSize: 16}}>Go To Checkout</Text>
                <Icon name="right" group="basic" color="#FFF" style={{marginLeft: 120}}/>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    paddingBottom: '100%',
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
  checkoutbutton: {
    backgroundColor: '#d47e2b',
    padding: 10,
    marginHorizontal: 36,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'space-between',
    borderRadius: 30,
  }
});
