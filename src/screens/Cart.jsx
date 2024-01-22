import React, {useContext, useEffect, useState} from 'react';
import {
  Dimensions,
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
import Logo from '../images/icons/logo-bessport.png';
import {COLORS} from '../helpers/customColor';
import {useNavigation} from '@react-navigation/native';
import {GlobalContext} from '../contexts/GlobalContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartItem from '../components/CartItem';
import CustomButton from '../components/CustomButton';

const {height} = Dimensions.get('window');
export default function Cart() {
  const navigation = useNavigation();
  const {refresh, setRefresh} = useContext(GlobalContext);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const getCart = async () => {
      const list = await AsyncStorage.getItem('cartList');
      if (list?.length) {
        setCart(JSON.parse(list));
      } else {
        setCart(null);
      }
    };

    getCart();
  }, [refresh]);

  useEffect(() => {
    if (cart?.length) {
      let sum = 0;
      cart.forEach(product => {
        sum += product.price * product.count;
      });

      setPrice(sum);
    }
  }, [cart, refresh]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={Burger} style={styles.burger} />
        </TouchableOpacity>

        <Image source={Logo} style={styles.logo} />

        <TouchableOpacity />
      </View>

      {!cart?.length ? (
        <View>
          <Text style={styles.headerText}>
            {'Корзина пуста...'.toUpperCase()}
          </Text>
        </View>
      ) : (
        ''
      )}

      <ScrollView contentContainerStyle={styles.scrollView}>
        {cart?.length
          ? cart.map((item, index) => <CartItem cart={item} key={item.name} />)
          : ''}
      </ScrollView>

      {cart?.length ? (
        <View style={styles.sumContainer}>
          <Text style={styles.check}>
            Сумма к оплате
            <Text style={styles.checkPrice}>{'    ' + price}$</Text>
          </Text>
        </View>
      ) : (
        ''
      )}

      {cart?.length ? (
        <CustomButton
          text={'ЗАКАЗАТЬ'}
          onPress={() => navigation.navigate('CartThank')}
        />
      ) : (
        <CustomButton
          text={'ЗАКАЗАТЬ'}
          onPress={() => navigation.navigate('Main')}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
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
  logo: {
    width: 200,
    height: 40,
    aspectRatio: 5,
    resizeMode: 'contain',
  },
  scrollView: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  check: {
    fontFamily: 'futura-pt-extra-bold',
    fontWeight: '900',
    color: COLORS.white,
    fontSize: 20,
  },
  sumContainer: {
    width: '100%',
    backgroundColor: COLORS.main,
    marginTop: 50,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 100,
  },
  checkPrice: {
    fontFamily: 'futura-pt-extra-bold',
    fontWeight: '900',
    color: COLORS.white,
  },
  headerText: {
    marginTop: height / 10,
    textAlign: 'center',
    color: COLORS.borderColor,
    fontFamily: 'futura-pt-extra-bold',
    fontWeight: '900',
    fontSize: 30,
  },
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 5,
    backgroundColor: COLORS.main,
    marginTop: 10,
    paddingVertical: 10,
  },
  drawerLogo: {
    aspectRatio: 0.2,
    resizeMode: 'contain',
  },
});
