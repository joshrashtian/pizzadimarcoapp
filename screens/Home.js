import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { BottomRow } from "../components";
import { Stack, useRouter } from "expo-router";
import { getAuth, User } from "firebase/auth";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.exterior}>
      <Text style={[styles.title, {marginLeft: 10, marginTop: 10}]}>Welcome back, user!</Text>
      <ScrollView>
      <Text
        style={[
          styles.title,
          { fontFamily: "LouisGeorgeCafeBold", marginTop: 30, marginLeft: 10 },
        ]}
      >
        Featured
      </Text>
      <View style={styles.categories}>
        <TouchableOpacity
        //onPress={}
        ></TouchableOpacity>
      </View>
      <Text
        style={[
          styles.title,
          { fontFamily: "LouisGeorgeCafeBold", marginTop: 30, marginLeft: 10 },
        ]}
      >
        Categories
      </Text>
      <View style={styles.categories}>
        <TouchableOpacity
        //onPress={}
        ></TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={{ fontSize: 20, textAlign: "center" }}>
          Welcome back, user!
        </Text>
      </View>
      </ScrollView>
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
    paddingVertical: 100,
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
