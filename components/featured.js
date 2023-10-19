import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import featuredImage from '../assets/images/IMG_8322.png'

let featureditemname = "Dinosaur Pizza";
let featuredcolor = "A00";
let featuredtextcolor = "000";


export const Featured = () => {
  if(featuredcolor === "#EDC"){
    featuredtextcolor = "000";
  }

  const [price, setPrice] = useState('$16.99')

  return (
    <View>
      <Text
        style={[
          styles.title,
          {
            fontFamily: "LouisGeorgeCafeBold",
            marginTop: 20,
            marginLeft: 10,
          },
        ]}
      >
        Featured
      </Text>
        <TouchableOpacity
        //onPress={}
        >  
        <View style={[styles.categories, { marginHorizontal: 15 }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Image source={featuredImage} style={{ height: 100, width: 100, borderRadius: 10}}/>
                <Text style={[styles.subtitle, { alignSelf: 'center' }]}>{featureditemname}</Text>
            </View>
            <View style={{ backgroundColor: '#EEE', padding: 10, marginTop: -33, borderRadius: 30, marginLeft: 240 }}>
            <Text style={{ fontSize: 14, textAlign: 'center'}}>{price}</Text>
            </View>
        </View>
        </TouchableOpacity> 
        
    </View>
  );
};

const styles = StyleSheet.create({
    title: {
    fontFamily: "LouisGeorgeCafe",
    fontSize: 30,
    textAlign: 'center',
    },
    subtitle: {
        fontFamily: 'lemonmilk',
        fontSize: 18, 
        color: "#" + featuredtextcolor,
        textAlign: 'right',
        textShadowOffset: {
            height: 0,
        },
        textShadowColor: '#444',
        textShadowRadius: 1,
    },
    categories: {
        alignContent: "center",
        marginVertical: 10,
        padding: 15,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        borderRadius: 20,
        backgroundColor: "#fff",
        shadowOffset: { height: 2 },
        shadowColor: "#AAA",
        shadowOpacity: "100%",
    },
    price: {
    }
})