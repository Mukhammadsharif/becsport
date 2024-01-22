import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Burger from '../images/icons/hamburger.png';
import Logo from '../images/icons/logo-bessport.png';
import {COLORS} from '../helpers/customColor';
import {useNavigation} from '@react-navigation/native';
import CartIcon from '../images/icons/cart.png';

const {width, height} = Dimensions.get('window');
export default function EventMenu() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={Burger} style={styles.burger} />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <Image source={Logo} style={styles.drawerLogo} />
      </View>

      <ScrollView>
        <View style={styles.container}>
          <View style={styles.mainContainer}>
            <View style={styles.drawerContainer}>
              <Text style={styles.drawerDate}>10.02.2024</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Italian')}
                style={styles.drawerFirstItem}>
                <Text style={styles.itemFirstText}>
                  Фестиваль Итальянской {'\n'} Пасты
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.drawerContainer}>
              <Text style={styles.drawerDate}>18.02.2024</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Carnaval')}
                style={styles.drawerFirstItem}>
                <Text style={styles.itemFirstText}>
                  Итальянский {'\n'} Карнавал
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.drawerContainer}>
              <Text style={styles.drawerDate}>23.02.2024</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Degustation')}
                style={styles.drawerFirstItem}>
                <Text style={styles.itemFirstText}>
                  Дегустация Итальянских Десертов
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.drawerContainer}>
              <Text style={styles.drawerDate}>26.02.2024</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Night')}
                style={styles.drawerFirstItem}>
                <Text style={styles.itemFirstText}>
                  Вечеринка Чемпионата {'\n'} Европы
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.drawerContainer}>
              <Text style={styles.drawerDate}>10.03.2024</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Festival')}
                style={styles.drawerFirstItem}>
                <Text style={styles.itemFirstText}>Итальянский Фестиваль</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <View>
              <Image source={CartIcon} style={styles.basket} />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 60,
    alignItems: 'center',
  },
  mainContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logoContainer: {
    width: '100%',
    height: 150,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    marginTop: 50,
  },
  logo: {
    width: '80%',
    height: '80%',
  },
  drawerContainer: {
    width: '90%',
    marginTop: 10,
  },
  drawerDate: {
    color: COLORS.borderColor,
    fontWeight: '900',
    fontSize: 14,
    fontFamily: 'futura-pt-cond-bold',
    textAlign: 'center',
    marginBottom: 2,
    marginRight: 2,
  },
  drawerFirstItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: COLORS.drawerButtonBackground,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
  },
  itemFirstText: {
    color: COLORS.white,
    fontWeight: '900',
    fontSize: 18,
    fontFamily: 'futura-pt-extra-bold',
    textAlign: 'center',
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: COLORS.drawerButtonBackground,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
  },
  itemText: {
    color: COLORS.white,
    fontWeight: '900',
    fontSize: 22,
    fontFamily: 'futura-pt-extra-bold',
  },
  icon: {
    width: 25,
    height: 25,
  },
  footer: {
    justifyContent: 'center',
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 30,
    fontFamily: 'futura-pt-cond-bold',
  },
  transform: {
    transform: 'scale(0.35)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 30,
  },
  closeIconContainer: {
    position: 'absolute',
    left: 20,
    right: 0,
    bottom: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  close: {
    width: 40,
    height: 40,
  },
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 8,
  },
  drawerLogo: {
    aspectRatio: 2.5,
    resizeMode: 'contain',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  burger: {
    width: 30,
    height: 25,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  cart: {
    width: 28,
    height: 30,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  basket: {
    width: 50,
    height: 50,
    marginTop: 50,
  },
});
