import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SplashScreen({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            handleGetToken();
        }, 2000);
    });

    const handleGetToken = async () => {
        navigation.replace('Home');
    };

    return (
        <>
        <StatusBar backgroundColor={'#fff'} barStyle='dark-content'/>
            <View style={styles.container}>
                <Image source={require('../images/ez-cash.png')} style={{ justifyContent: 'center', alignItems: 'center', width: 250, height: 200 }} resizeMode='contain' />
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        backgroundColor:'#fff',
        justifyContent: 'center',
    },
});