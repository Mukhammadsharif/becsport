import React from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
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
import {useNavigation} from '@react-navigation/native';

export default function Translations() {
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
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.timeContainer}>
                <Text style={styles.time}>15.02 - 00:15</Text>
              </View>

              <View style={styles.titleContainer}>
                <Text style={styles.title}>NFL</Text>
              </View>
            </View>

            <View style={styles.texts}>
              <Text style={styles.text}>New England Patriots</Text>
              <Text style={styles.text}>Dallas Cowboys</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.timeContainer}>
                <Text style={styles.time}>18.02 - 01:00</Text>
              </View>

              <View style={styles.titleContainer}>
                <Text style={styles.title}>MLB</Text>
              </View>
            </View>

            <View style={styles.texts}>
              <Text style={styles.text}>New York Yankees</Text>
              <Text style={styles.text}>Boston Red Sox</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.timeContainer}>
                <Text style={styles.time}>27.02 - 00:05</Text>
              </View>

              <View style={styles.titleContainer}>
                <Text style={styles.title}>NHL</Text>
              </View>
            </View>

            <View style={styles.texts}>
              <Text style={styles.text}>Chicago Blackhawks</Text>
              <Text style={styles.text}>Detroit Red Wings</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.timeContainer}>
                <Text style={styles.time}>30.02 - 00:00</Text>
              </View>

              <View style={styles.titleContainer}>
                <Text style={styles.title}>NBA</Text>
              </View>
            </View>

            <View style={styles.texts}>
              <Text style={styles.text}>Chicago Bulls</Text>
              <Text style={styles.text}>Miami Heat</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <CustomButton
        text={'НА ГЛАВНУЮ'.toUpperCase()}
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
  main: {
    width: '100%',
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    borderRadius: 20,
    borderColor: COLORS.borderColor,
    borderWidth: 1,
    paddingVertical: 12,
  },
  title: {
    fontFamily: 'futura-pt-extra-bold',
    fontWeight: '900',
    fontSize: 40,
    color: COLORS.black,
  },
  card: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
  },
  cardHeader: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  timeContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: COLORS.borderColor,
    borderRadius: 12,
    marginBottom: 5,
  },
  time: {
    fontFamily: 'futura-pt-cond-medium',
    fontWeight: '600',
    fontSize: 11,
    color: COLORS.white,
    textAlign: 'center',
  },
  texts: {
    marginLeft: 10,
    marginTop: 15,
  },
  text: {
    fontFamily: 'futura-pt-cond-medium',
    fontWeight: '600',
    fontSize: 18,
    color: COLORS.black,
    marginTop: 2,
    letterSpacing: 1.2,
  },
});
