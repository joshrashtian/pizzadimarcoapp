import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Touchable,
  Dimensions,
} from "react-native";
import { BottomRow } from "../components";
import { Stack, useRouter } from "expo-router";
import { getAuth, User } from "firebase/auth";
import { database } from "../firebase";
import { categories } from "../components/categorydata";


const Home = ({ navigation }) => {

  const [index, setIndex] = useState("0");
  const [selected, setselected] = useState("1")


  return (
    <SafeAreaView style={styles.exterior}>
      <Text style={[styles.title, { marginLeft: 10, marginTop: 10 }]}>
        Welcome back, user!
      </Text>
      <View>
        <Text
          style={[
            styles.title,
            {
              fontFamily: "LouisGeorgeCafeBold",
              marginTop: 30,
              marginLeft: 10,
            },
          ]}
        >
          Featured
        </Text>
        <View style={[styles.categories, {padding: 100}]}>
          <TouchableOpacity
          //onPress={}
          ></TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={{ fontSize: 20, textAlign: "center" }}>
            Welcome back, user!
          </Text>
        </View>
        <Text
          style={[
            styles.title,
            {
              fontFamily: "LouisGeorgeCafeBold",
              marginTop: 30,
              marginLeft: 10,
            },
          ]}
        >
          Categories
        </Text>
        <FlatList
        showsHorizontalScrollIndicator
        horizontal
        keyExtractor= {(item) => item.id}
        data={categories}
        renderItem={({item, index}) => (
          <TouchableOpacity style={styles.categories} onPress={() => navigation.navigate("Category", item)}>
            <Text style={{fontFamily: 'LouisGeorgeCafe', fontSize: 20}}>{item.title}</Text>
          </TouchableOpacity>
        )}
        >
        </FlatList>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  exterior: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#EEE",
  },
  container: {},
  categories: {
    alignContent: "center",
    marginVertical: 10,
    padding: 20,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 40,
    backgroundColor: "#fff",
    shadowOffset: { height: 2 },
    shadowColor: "#AAA",
    shadowOpacity: "100%",
  },
  title: {
    fontFamily: "LouisGeorgeCafe",
    fontSize: 30,
  },
});

export default Home;
