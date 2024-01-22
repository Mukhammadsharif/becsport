import React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Burger from '../images/icons/hamburger.png';
import Cart from '../images/icons/cart.png';
import Logo from '../images/icons/logo-bessport.png';
import {COLORS} from '../helpers/customColor';
import CustomButton from '../components/CustomButton';
import QRCode from 'react-native-qrcode-svg';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

export default function Order() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={Burger} style={styles.burger} />
        </TouchableOpacity>

        <Image source={Logo} style={styles.logo} />

        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Image source={Cart} style={styles.parcel} />
        </TouchableOpacity>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>Спасибо за {'\n'} заказ!</Text>
      </View>

      <View style={styles.qrContainer}>
        <QRCode
          value={'https://daglavka.com/'}
          size={width / 2.2}
          color={COLORS.main}
        />
      </View>

      <CustomButton
        text={'НА ГЛАВНУЮ'}
        onPress={() => navigation.navigate('Main')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  logo: {
    width: 200,
    height: 40,
    aspectRatio: 5,
    resizeMode: 'contain',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: COLORS.white,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  burger: {
    width: 30,
    height: 25,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  parcel: {
    width: 28,
    height: 30,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 6,
    backgroundColor: COLORS.logoBackgroundColor,
    marginTop: height / 10,
  },
  drawerLogo: {
    aspectRatio: 1.8,
    resizeMode: 'contain',
  },
  qrContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  textContainer: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: COLORS.borderColor,
    marginTop: 100,
    marginBottom: 50,
  },
  text: {
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: 'futura-pt-extra-bold',
    fontWeight: '900',
    fontSize: 30,
  },
});
