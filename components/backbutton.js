import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from "react-native-ico"
import { useNavigation } from '@react-navigation/native'

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
    <View style={styles.backbutton}>
      <Icon name="clear-button" color="#AAA" />
    </View>
  </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({
    backbutton: {
        position: "absolute",
        padding: 7,
        margin: 10,
      },
})