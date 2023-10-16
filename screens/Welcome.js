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
  GoogleAuthProvider,
  signInWithPopup,
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
      alert(error.message);
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
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const response = await getRedirectResult(auth, provider);
      console.log(response);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  //Handles if the user has been logged in.
  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigation.navigate("App");
      const uid = user.uid;
    } else {
      navigation.navigate("Welcome");
    }
  });



  //Login Screen, what the user sees.
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text
        style={{
          fontSize: 40,
          fontFamily: "LouisGeorgeCafeBold",
          marginLeft: 10,
          color: "#F44",
          textShadowRadius: 0.3,
          textShadowColor: "#000",
        }}
      ></Text>
      <View style={styles.container2}>
        <Text
          style={[
            styles.hometext,
            { fontFamily: "LouisGeorgeCafeBold", marginBottom: 0 },
          ]}
        >
          Hello There!
        </Text>
        <Text style={styles.hometext}>Let's Get You Signed In.</Text>
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
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              style={[styles.button, {backgroundColor: "#4285F4"}]}
              onPress={googleLogin}
            >
              <Text style={[styles.buttontext, { color: "#FFF" }]}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {backgroundColor: "#189924"}]}>
              <Text style={[styles.buttontext, { color: "#FFF" }]}>Google</Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontFamily: "LouisGeorgeCafeBold",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            - or -
          </Text>
          <TouchableOpacity
            onPress={signUp}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Create Account</Text>
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
    padding: 26,
    paddingVertical: 70,
    backgroundColor: "#CCC",
    marginHorizontal: 10,
    borderRadius: 30,
    shadowRadius: 3,
    shadowColor: "#AAA",
    shadowOpacity: "20%",
    shadowOffset: 1,
  },
  hometext: {
    fontFamily: "LouisGeorgeCafe",
    fontSize: 40,
    marginLeft: 10,
    marginBottom: 30,
  },
  input: {
    padding: 15,
    borderRadius: 10,
    margin: 3,
    fontFamily: "LouisGeorgeCafe",
    backgroundColor: "#FFF",
    shadowRadius: 0.2,
    shadowColor: "#BBB",
    shadowOpacity: "80%",
    shadowOffset: { height: 2 },
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
    shadowOpacity: "10%",
    shadowOffset: { height: 0.6 },
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
