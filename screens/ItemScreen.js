import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

export default function Item() {
    const {params} = useRoute();
    let item = params;
    console.log(params)
    return(
        <SafeAreaView>
            <Text style={{fontSize: 40, fontFamily: 'LouisGeorgeCafeBold', textAlign: 'center'}}>{params.name}</Text>
            <Text style={{fontSize: 30, fontFamily: 'LouisGeorgeCafe', textAlign: 'center'}}>{params.price}</Text>
        </SafeAreaView>    
        )
}