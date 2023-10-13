import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { auth } from "../firebase";

const UserSettings = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.exterior}>
      <Text
        style={[
          styles.title,
          {
            marginLeft: 10,
            marginTop: 10,
            fontSize: 40,
            fontFamily: "LouisGeorgeCafeBold",
          },
        ]}
      >
        User Settings
      </Text>
      <View style={styles.accinfo}>
        <Text style={[styles.title, { marginLeft: 10, marginVertical: 6 }]}>
          Account Information
        </Text>
        <View style={styles.infocontainer}>
        <Text
          style={{
            marginLeft: 10,
            fontSize: 16,
            fontFamily: "LouisGeorgeCafe",
          }}
        >
          Name: {auth.currentUser.displayName}
        </Text>
        <Text
          style={{
            marginLeft: 10,
            fontSize: 16,
            fontFamily: "LouisGeorgeCafe",
          }}
        >
          Phone Number: {auth.currentUser.phoneNumber}
        </Text>
        <Text
          style={{
            marginLeft: 10,
            fontSize: 16,
            fontFamily: "LouisGeorgeCafe",
          }}
        >
          Email: {auth.currentUser.email}
        </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>Update Account Information</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#F55" }]}
          onPress={() => auth.signOut()}
        >
          <Text style={styles.buttontext}>Logout</Text>
        </TouchableOpacity>
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
  button: {
    padding: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    margin: 5,
    backgroundColor: "#AAA",
    borderShadowRadius: 1,
    shadowRadius: 0.8,
    shadowColor: "#000",
    //shadowOpacity: "10%",
    shadowOffset: { height: 0.6 },
  },
  buttontext: {
    fontFamily: "lemonmilk",
    color: "#FFF",
    //textShadowColor: "#EEE",
    //textShadowOffset: { height: 0.2 },
    textShadowRadius: 1,
    textAlign: "center",
  },
  accinfo: {
    backgroundColor: "#FFF",
    paddingVertical: 30,
    marginHorizontal: 10,
    borderRadius: 40,
    paddingHorizontal: 10,
  },
  infocontainer: {
    marginBottom: 10,
    backgroundColor: '#EDD',
    borderRadius: 20,
    padding: 10,
  }
});

export default UserSettings;
