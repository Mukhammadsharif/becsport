import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Background from '../images/backgrounds/background-2.png';
import Back from '../images/icons/back.png';
import {COLORS} from '../helpers/customColor';

const {height} = Dimensions.get('window');
export default function Carnaval() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={Background}
      style={styles.container}
      imageStyle={styles.background}>
      <TouchableOpacity onPress={() => navigation.navigate('EventMenu')}>
        <Image style={styles.back} source={Back} />
      </TouchableOpacity>

      <Text style={styles.title}>18.02.2024</Text>
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
  background: {
    height: height,
    resizeMode: 'stretch',
    paddingTop: 50,
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
    color: COLORS.white,
    fontSize: 16,
    textAlign: 'center',
    paddingRight: 10,
    position: 'absolute',
    top: height / 2.8,
    left: '38%',
  },
});
