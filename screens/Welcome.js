import { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

const Welcome = () => {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.container2}>
            <Text style={styles.hometext}>Hello! Let's LogIn</Text>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#EEE',
    },
    container2: {
        padding: 80,
        backgroundColor: '#CCC',
        marginHorizontal: 10,
        borderRadius: 30,
    },
    hometext: {
        fontFamily: 'lemonmilk',
    }
})

export default Welcome;