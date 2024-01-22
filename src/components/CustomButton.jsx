import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../helpers/customColor';

export default function CustomButton({text, onPress}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 10,
    position: 'absolute',
    bottom: 30,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    borderRadius: 25,
    width: '100%',
    backgroundColor: COLORS.main,
    borderColor: '#272E41',
    borderWidth: 1,
  },
  text: {
    color: COLORS.white,
    fontSize: 22,
    fontFamily: 'Montserrat-Bold',
    fontWeight: '800',
  },
});
