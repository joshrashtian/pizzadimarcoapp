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
  onAuthStateChanged,
} from "firebase/auth";

const Welcome = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //Setting up the sign in function
  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
      alert("Sign in failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  //Setting up the register function
  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
    } catch (error) {
      alert("Sign in failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };


  //Handles if the user has been logged in.
  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigation.navigate("Home");
      const uid = user.uid;
    } else {
      navigation.navigate("Welcome");
    }
  });


  //Login Screen, what the user sees.
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.container2}>
        <Text
          style={{
            fontSize: 40,
            fontFamily: "lemonmilk",
            textAlign: "center",
            color: "#F44",
            textShadowRadius: 0.3,
            textShadowColor: "#000",
          }}
        >
          Pizza diMarco
        </Text>
        <Text style={styles.hometext}>Account Login</Text>
        <View
          style={{
            borderWidth: 0.7,
            borderColor: "#000",
            borderRadius: 10,
            marginVertical: 5,
            marginHorizontal: 5,
          }}
        ></View>
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

//Exporting our function
export default Welcome;


//Style Sheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#EEE",
  },
  container2: {
    padding: 40,
    backgroundColor: "#CCC",
    marginHorizontal: 5,
    borderRadius: 30,
  },
  hometext: {
    fontFamily: "LouisGeorgeCafe",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10,
  },
  input: {
    padding: 15,
    borderRadius: 10,
    margin: 3,
    fontFamily: "LouisGeorgeCafe",
    backgroundColor: "#FFF",
    shadowRadius: 0.2,
    shadowColor: "#000",
    shadowOpacity: "80%",
    shadowOffset: 1,
  },
  buttonContainer: {
    marginTop: 10,
    justifyContent: "center",
  },
  button: {
    padding: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    margin: 5,
    backgroundColor: "#DDD",
    borderShadowRadius: 1,
    shadowRadius: 0.8,
    shadowColor: "#000",
    shadowOpacity: "30%",
    shadowOffset: 1,
  },
  buttontext: {
    fontFamily: "lemonmilk",
    color: "#050",
    textAlign: "center",
  },
  buttonOutline: {},
  buttonOutlineText: {
    fontFamily: "lemonmilk",
    color: "#500",
    textAlign: "center",
  },
});
