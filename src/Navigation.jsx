import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Platform,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {COLORS} from './helpers/customColor';
import Main from './screens/Main';
import Cart from './screens/Cart';
import CartThank from './screens/CartThank';
import Book from './screens/Book';
import BookThank from './screens/BookThank';
import Contacts from './screens/Contacts';
import Translations from './screens/Translations';
import EventMenu from './screens/EventMenu';
import Italian from './screens/Italian';
import Carnaval from './screens/Carnaval';
import Night from './screens/Night';
import Degustation from './screens/Degustation';
import Festival from './screens/Festival';
import Logo from './images/icons/logo-bessport.png';
import CartIcon from './images/icons/cart.png';
import Close from './images/icons/close-i.png';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const {width, height} = Dimensions.get('window');
export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          component={DrawerNavigator}
          name="DrawerNavigator"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: width,
        },
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerNavigator {...props} />}>
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="CartThank" component={CartThank} />
      <Drawer.Screen name="Book" component={Book} />
      <Drawer.Screen name="BookThank" component={BookThank} />
      <Drawer.Screen name="Contacts" component={Contacts} />
      <Drawer.Screen name="Translations" component={Translations} />
      <Drawer.Screen name="EventMenu" component={EventMenu} />
      <Drawer.Screen name="Italian" component={Italian} />
      <Drawer.Screen name="Carnaval" component={Carnaval} />
      <Drawer.Screen name="Night" component={Night} />
      <Drawer.Screen name="Degustation" component={Degustation} />
      <Drawer.Screen name="Festival" component={Festival} />
    </Drawer.Navigator>
  );
}

function CustomDrawerNavigator(props) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <View style={styles.container}>
        <View style={styles.closeIconContainer}>
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
            <Image source={Close} style={styles.close} />
          </TouchableOpacity>
        </View>

        <View style={styles.header}>
          <Image source={Logo} style={styles.drawerLogo} />
        </View>

        <View style={styles.mainContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Main')}
            style={styles.drawerFirstItem}>
            <Text style={styles.itemFirstText}>{'Главная'.toUpperCase()}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Cart')}
            style={styles.drawerItem}>
            <Text style={styles.itemText}>{'Корзина'.toUpperCase()}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Translations')}
            style={styles.drawerItem}>
            <Text style={styles.itemText}>{'Транслации'.toUpperCase()}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Contacts')}
            style={styles.drawerItem}>
            <Text style={styles.itemText}>{'Контакты'.toUpperCase()}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Book')}
            style={styles.drawerItem}>
            <Text style={styles.itemText}>
              {'Резерв столика'.toUpperCase()}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('EventMenu')}
            style={styles.drawerItem}>
            <Text style={styles.itemText}>{'События'.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <View>
            <Image source={CartIcon} style={styles.basket} />
          </View>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingBottom: 100,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    height: Platform.OS === 'ios' ? height - height / 20 : height,
  },
  mainContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height / 20,
  },
  drawerFirstItem: {
    width: '75%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    borderColor: COLORS.borderColor,
    borderWidth: 1,
  },
  itemFirstText: {
    color: COLORS.main,
    fontWeight: '900',
    fontSize: 22,
    fontFamily: 'futura-pt-extra-bold',
  },
  drawerItem: {
    width: '75%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 10,
    marginTop: 7,
    borderRadius: 15,
    borderColor: COLORS.borderColor,
    borderWidth: 1,
    backgroundColor: COLORS.drawerButtonBackground,
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
    fontFamily: 'Montserrat-Bold',
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
    height: height / 10,
  },
  drawerLogo: {
    aspectRatio: 2.5,
    resizeMode: 'contain',
  },
  basket: {
    width: 50,
    height: 50,
    marginTop: height / 5,
  },
});
