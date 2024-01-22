import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Background from '../images/backgrounds/background-3.png';
import Back from '../images/icons/back.png';
import {COLORS} from '../helpers/customColor';

const {height} = Dimensions.get('window');
export default function Degustation() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={Background}
      style={styles.container}
      imageStyle={styles.background}>
      <TouchableOpacity onPress={() => navigation.navigate('EventMenu')}>
        <Image style={styles.back} source={Back} />
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>23.02.2024</Text>
      </View>
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
  },
  titleContainer: {
    position: 'absolute',
    top: height / 6.5,
    left: '35%',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 15,
  },
});
