import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, Image } from 'react-native';

const OnBoardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AyoNonton.</Text>
      <Image style={styles.logo} source={require('../../assets/theater.png')} />
      <Text style={styles.description}>Tempat mencari jadwal bioskop terlengkap</Text>
  
      <TouchableOpacity onPress={
        () => navigation.navigate('Home')
      }
        style={styles.button}>
        <Text style={styles.buttonText}>Lanjutkan {'>>'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white',
    height: '100%'
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 100,
    marginTop: 50
  },
  logo: {
    height: 150,
    width: 150
  },
  description: {
    fontSize: 18,
    marginTop: 70,
    fontWeight: 'bold',
    width: '80%',
    textAlign: 'center'
  },
  button: {
    marginTop: 100,
    backgroundColor: '#145DA0',
    width: 300,
    height: 50,
    borderRadius: 5,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 20
  }
});

export default OnBoardingScreen;
