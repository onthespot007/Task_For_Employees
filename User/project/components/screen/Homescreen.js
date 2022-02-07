import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState,useContext} from 'react';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Geolocation from '@react-native-community/geolocation';
import {
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  Platform,
  Image,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
navigator.geolocation = require('@react-native-community/geolocation');
import Searchthelanearby from '../searchthelanearby';
import GetLocation from 'react-native-get-location';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Settings from '../navigation/root';
import Color from '../Color';
import Logout from './Logout';

const Drawer = createDrawerNavigator();

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
          backgroundColor: '#f6f6f6',
          marginBottom: 20,
        }}>
        <View>
          <Image
            source={require('./PicsArt_05-16-11.38.15.jpg')}
            style={{
              width: 60,
              height: 60,
              borderRadius: 80,
              borderWidth: 4,
              borderColor: Colors.black,
            }}
          />
        </View>
        <Text>Ufaq Haider</Text>
        <Text>ufaqhaider674@gmail.com</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const Homescreen: () => React$Node = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const  {storedCredentials,setStoredCredentials}=useContext(CredentialsContext);


  useEffect(() => {
    (async () => {
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={Searchthelanearby} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
  return (
    <>
      <Searchthelanearby />
    </>
  );
};
export default Homescreen;
