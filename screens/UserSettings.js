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
      <Text style={[styles.title, { marginLeft: 10, marginTop: 10 }]}>
        Account Information
      </Text>

      <Text
        style={{ marginLeft: 10, fontSize: 16, fontFamily: "LouisGeorgeCafe" }}
      >
        Email: {auth.currentUser.email}
      </Text>
      <TouchableOpacity
        style={styles.signoutbutton}
        onPress={() => auth.signOut()}
      >
        <Text
          style={{
            fontFamily: "lemonmilk",
            color: "#FFF",
            textShadowColor: "#EEE",
            textShadowOffset: { height: 0.2 },
            textShadowRadius: 1,
          }}
        >
          Logout
        </Text>
      </TouchableOpacity>
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
  signoutbutton: {
    padding: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    margin: 5,
    backgroundColor: "#FCC",
    borderShadowRadius: 1,
    shadowRadius: 0.8,
    shadowColor: "#000",
    shadowOpacity: "10%",
    shadowOffset: { height: 0.6 },
  },
});

export default UserSettings;
