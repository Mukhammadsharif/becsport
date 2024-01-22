import React, {useContext, useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {GlobalContext} from '../contexts/GlobalContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLORS} from '../helpers/customColor';

const {width, height} = Dimensions.get('window');
export default function Card({item}) {
  const {refresh, setRefresh} = useContext(GlobalContext);
  const [added, setAdded] = useState(false);
  const add = async product => {
    const cartList = await AsyncStorage.getItem('cartList');
    if (cartList) {
      const cartArray = JSON.parse(cartList);
      const existProduct = cartArray.find(cart => cart.name === product.name);
      if (!existProduct) {
        cartArray.push(product);
        await AsyncStorage.setItem('cartList', JSON.stringify(cartArray));
      }
    } else {
      const cartArray = [];
      cartArray.push(product);
      await AsyncStorage.setItem('cartList', JSON.stringify(cartArray));
    }
    await setRefresh(!refresh);
  };

  const trash = async product => {
    const cartList = await AsyncStorage.getItem('cartList');
    if (cartList) {
      const cartArray = JSON.parse(cartList);
      const existProduct = cartArray.find(cart => cart.name === product.name);
      if (existProduct) {
        const newArray = cartArray.filter(cart => cart.name !== product.name);
        await AsyncStorage.setItem('cartList', JSON.stringify(newArray));
      }
    }
    await setRefresh(!refresh);
  };

  const define = async product => {
    const cartList = await AsyncStorage.getItem('cartList');
    if (cartList) {
      const cartArray = JSON.parse(cartList);
      const existProduct = cartArray.find(cart => cart.name === product.name);
      if (existProduct) {
        trash(product);
      } else {
        add(product);
      }
    } else {
      add(product);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      const cartList = await AsyncStorage.getItem('cartList');
      if (cartList) {
        const cartArray = JSON.parse(cartList);
        const existProduct = cartArray.find(cart => cart.name === item.name);
        if (existProduct) {
          setAdded(true);
        } else {
          setAdded(false);
        }
      } else {
        setAdded(false);
      }
    };

    getProduct();
  }, [refresh]);
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />

      <View style={styles.rightContainer}>
        <Text style={styles.name}>{item.name}</Text>

        <Text style={styles.description}>{item.description}</Text>

        <View style={styles.row}>
          {added ? (
            <TouchableOpacity style={styles.addedButton}>
              <Text style={styles.buttonText}>ДОБАВЛЕНО</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => define(item)}>
              <Text style={styles.buttonText}>КУПИТЬ</Text>
            </TouchableOpacity>
          )}

          <View style={styles.priceContainer}>
            <Text style={styles.price}>{item.price}$</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    height: 80,
    width: width * 0.28,
    borderRadius: 15,
  },
  rightContainer: {
    marginLeft: 10,
  },
  name: {
    color: COLORS.black,
    fontFamily: 'futura-pt-extra-bold',
    fontWeight: '700',
    fontSize: 16,
  },
  description: {
    color: COLORS.black,
    fontFamily: 'futura-pt-light',
    fontWeight: '200',
    fontSize: 10,
    paddingTop: 3,
    height: 30,
    width: width * 0.6,
  },
  price: {
    fontFamily: 'futura-pt-cond-bold',
    fontSize: 14,
    color: COLORS.black,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  button: {
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: COLORS.borderColor,
  },
  buttonText: {
    fontFamily: 'futura-pt-cond-bold',
    fontSize: 13,
    color: COLORS.white,
    fontWeight: '700',
  },
  priceContainer: {
    paddingHorizontal: 5,
    paddingVertical: 3,
    marginLeft: 5,
  },
  addedButton: {
    borderRadius: 25,
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: COLORS.borderColor,
  },
});
