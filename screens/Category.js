import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { categories } from "../components/categorydata";
import { useRoute } from "@react-navigation/native";
import Icon from "react-native-ico-material-design";

export default function Category({ navigation }) {
  const { params: item } = useRoute;
  let categoryName = 'Pizza';
  useEffect(()=>{

  },[item])
  return (
    <SafeAreaView style={styles.exterior}>
    <View style={styles.toprow}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
      >
        <View
          style={{
            borderRadius: 30,
            backgroundColor: "#AAA",
            padding: 8,
            marginLeft: 10,
          }}
        >
          <Icon name="left-arrow-key" color="#FFF" />
        </View>
      </TouchableOpacity>
      <Text style={styles.header}>{categoryName}</Text>
      </View>
    <View style={styles.body}>
          
    </View>
    </SafeAreaView>
  );
}

//Style Sheet
const styles = StyleSheet.create({
  exterior: {
    flex: 1,
    backgroundColor: "#EEE",
  },
  backtext: {
    marginTop: 4,
    fontSize: 20,
    fontFamily: "lemonmilk",
    color: "#FFF",
  },
  toprow: {
    flexDirection: 'row',
  },
  header: {
    fontFamily: 'LouisGeorgeCafeBold',
    fontSize: 30,
    alignContent: 'center',
    marginLeft: 10,
  },
  body: {

  },
});
