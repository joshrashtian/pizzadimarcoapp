import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { getAuth, User } from "firebase/auth";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.exterior}>
      <View style={styles.headercontainer}>
        <TouchableOpacity
          //onPress={}
        ></TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome back, user!</Text>
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
  container: {
    alignContent: "center",
    backgroundColor: "#FFF",
  },
  title: {
    fontFamily: "LouisGeorgeCafe",
    fontSize: 30,
  },
});

export default Home;
