import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import * as Font from "expo-font";
import Layout from "./components";

const getFonts = () => Font.loadAsync({
    'lemonmilk': require("./assets/fonts/LEMONMILK.otf"),
    'LouisGeorgeCafe': require("./assets/fonts/LouisGeorgeCafe.ttf"),
    'LouisGeorgeCafeBold': require("./assets/fonts/LouisGeorgeCafeBold.ttf")
});


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <Layout />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} onError={console.warn}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
