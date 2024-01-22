import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Background from '../images/backgrounds/background-1.png';
import Back from '../images/icons/back.png';
import {COLORS} from '../helpers/customColor';

const {height, width} = Dimensions.get('window');
export default function Italian() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={Background} style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('EventMenu')}>
        <Image style={styles.back} source={Back} />
      </TouchableOpacity>

      <Text style={styles.title}>10.02.2024</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    paddingTop: 50,
    paddingLeft: 20,
  },
  back: {
    width: 50,
    height: 35,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'futura-pt-cond-medium',
    fontWeight: '900',
    color: COLORS.borderColor,
    fontSize: 16,
    textAlign: 'center',
    paddingRight: 10,
    position: 'absolute',
    top: height / 3.5,
    right: '0%',
  },
});
