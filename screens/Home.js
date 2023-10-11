import { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { User } from "firebase/auth";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome back, user!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#EEE",
  },
  header: {
    alignContent: "center",
  },
  title: {
    fontFamily: "LouisGeorgeCafe",
    fontSize: 30,
  },
});

export default Home;
