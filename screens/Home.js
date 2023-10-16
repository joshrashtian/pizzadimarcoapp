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
} from "react-native";
import { BottomRow } from "../components";
import { Stack, useRouter } from "expo-router";
import { getAuth, User } from "firebase/auth";


const categories = [
  {
    id: "0",
    title: "Pizza",
    command: "Welcome",
  },
  {
    id: "1",
    title: "Calzones"
  },
  {
    id: "2",
    title: "Sandwiches"
  },
  {
    id: "3",
    title: "Salads"
  }
];

const Home = ({ navigation }) => {
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
        
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        data={categories}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.categories}>
            <Text style={{fontFamily: 'lemonmilk', fontSize: 24}}>{item.title}</Text>
          </TouchableOpacity>
        )}
        >

        </FlatList>
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
        <View style={[styles.categories, {padding: 80}]}>
          <TouchableOpacity
          //onPress={}
          ></TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={{ fontSize: 20, textAlign: "center" }}>
            Welcome back, user!
          </Text>
        </View>
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
