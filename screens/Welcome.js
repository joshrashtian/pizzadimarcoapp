import { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

const Welcome = () => {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.container2}>
            <Text>Welcome to Pizza DiMarco!</Text>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#EEE',
    },
    container2: {
        padding: 30,
        backgroundColor: '#CCC',
        marginHorizontal: 10,
        borderRadius: 30,
    },
    hometext: {
        
    }
})

export default Welcome;