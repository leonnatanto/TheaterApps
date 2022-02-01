import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image } from 'react-native'

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('OnBoarding');
        }, 1000)

    }, []
    );

    return (
        <View style={styles.container}>
             <Image style={styles.logo} source={require('../../assets/theater.png')} />
            
            <Text style={styles.title}>AyoNonton</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'white',
        height: '100%'
      },
      logo: {
        height: 200,
        width: 200
      },
      title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: 50
      }
});

export default SplashScreen;