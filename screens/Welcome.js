import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { Stack, useRouter } from "expo-router";

const Welcome = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.container2}>
        <Text style={styles.hometext}>Account Login</Text>
        <View style={styles.logincontainer}>
          <TextInput
          placeholder="email"
          // value={ }
          // onChangeText={text => }
          style={styles.input}
          />
          <TextInput
          placeholder="password"
          // value={ }
          // onChangeText={text => }
          style={styles.input}
          secureTextEntry
          />
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => { }} style={styles.button}>
                <Text style={styles.buttontext}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={[styles.button, styles.buttonOutline]}>
                <Text style={styles.buttonOutlineText}>Register</Text>
            </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#EEE",
  },
  container2: {
    padding: 80,
    backgroundColor: "#CCC",
    marginHorizontal: 10,
    borderRadius: 30,
  },
  hometext: {
    fontFamily: "lemonmilk",
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    padding: 10,
    borderRadius: 10,
    margin: 3,
    fontFamily: "lemonmilk",
    backgroundColor: '#FFF',
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: '#DDD',
  },
  buttontext: {
    fontFamily: 'lemonmilk',
    color: '#050',
  },
  buttonOutline: {
  },
  buttonOutlineText: {
    fontFamily: 'lemonmilk',
    color: '#500',
  },
});
