import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View, Platform,SafeAreaView,StatusBar, Dimensions } from 'react-native';
import MapView, { Marker, AnimatedRegion } from "react-native-maps";
import PubNubReact from "pubnub-react";
import HomeScreen from "./HOMESCREEN";
import * as Location from 'expo-location';
import firebase from "./src/component/Database/firebase";


const App:()=> React$Node=()=>{
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
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
   <>
        <StatusBar barStyle="dark-content"/>
        <SafeAreaView>
            <HomeScreen/>
        </SafeAreaView>
   </>
  );

};
export default App;

