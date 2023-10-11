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
import { auth, firebaseauth } from "../firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";


const Welcome = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch(error) {
      console.log(error);
      alert('Sign in failed: ' + error.message);
    } finally {
      setLoading(false);
    } 
  }

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error){
      alert('Sign in failed: ' + error.message);
    } finally {
      setLoading(false);
    } 
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigation.navigate('Home')
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.container2}>
        <Text style={styles.hometext}>Account Login</Text>
        <View style={styles.logincontainer}>
          <TextInput
            placeholder="email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={signIn} style={styles.button}>
            <Text style={styles.buttontext}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={signUp}
            style={[styles.button, styles.buttonOutline]}
          >
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
    fontFamily: "LouisGeorgeCafe",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10,
  },
  input: {
    padding: 13,
    borderRadius: 10,
    borderColor: "#EEE",
    borderWidth: 2,
    margin: 3,
    fontFamily: "LouisGeorgeCafe",
    backgroundColor: "#FFF",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
  },
  button: {
    padding: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: "#DDD",
  },
  buttontext: {
    fontFamily: "lemonmilk",
    color: "#050",
  },
  buttonOutline: {},
  buttonOutlineText: {
    fontFamily: "lemonmilk",
    color: "#500",
  },
});
