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
import { Featured } from "../components/featured";
import { Items } from "../components/itemrow";


const Home = ({ navigation }) => {

  const [selected, setselected] = useState("Pizza")

  return (
    <SafeAreaView style={styles.exterior}>
      <Text style={[styles.title, { marginLeft: 10, marginTop: 10 }]}>
        Welcome back, user!
      </Text>
      <View>
      <Featured />
        <Text
          style={[
            styles.title,
            {
              fontFamily: "LouisGeorgeCafeBold",
              marginTop: 20,
              marginLeft: 10,
            },
          ]}
        >
          Categories
        </Text>
        <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor= {(item) => item.id}
        data={categories}
        renderItem={({item, index}) => (
          <TouchableOpacity style={styles.categories} onPress={() => {
            setselected(item.title)}}>
            <Text style={{fontFamily: 'LouisGeorgeCafe', fontSize: 20}}>{item.title}</Text>
          </TouchableOpacity>
        )}
        />
      </View>
      <Text
          style={[
            styles.title,
            {
              fontFamily: "LouisGeorgeCafeBold",
              marginTop: 10,
              marginLeft: 10,
            },
          ]}
        >
        {selected}
        </Text>
        <Items Selected={selected} />
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
  categories2: {
    alignContent: "center",
    marginVertical: 10,
    padding: 20,
    paddingHorizontal: 40,
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowOffset: { height: 2 },
    shadowColor: "#AAA",
    shadowOpacity: "100%",
  },
  title: {
    fontFamily: "LouisGeorgeCafe",
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Home;
