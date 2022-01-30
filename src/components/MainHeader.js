import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const MainHeader = ( { text, type, backFunction }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={backFunction}>
      <Image style={styles.backButton} source={require('../../assets/back.png')}/>
      </TouchableOpacity>
      <Text style={styles.text}>
        {text}
      </Text>
      <TouchableOpacity>
      <Image style={styles.backButton} source={require('../../assets/ask.png')}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 35,
    paddingHorizontal: 10
  },
  backButton: {
    width: 25,
    height: 25
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default MainHeader;
