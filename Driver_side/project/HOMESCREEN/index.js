import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, Pressable} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import NewOrderPopup from '../src/component/NewOrderPickup';
const GOOGLE_MAPS_APIKEY = 'AIzaSyAz7DsC7BD6aflaqt06jLrUg4pM9ccDxCs';

const HomeScreen = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [myPosition, setMyPosition] = useState(null);
  const [order, setOrder] = useState(null);
  const [newOrder, setNewOrder] = useState({
    id: '1',

    type: 'Thela',

    originLatitude: 26.86076238103454,
    originLongitude: 80.88032449671913,

    destLatitude: 26.86076238103454,
    destLongitude: 80.88032449671913,

    user: {
      rating: 4.8,
      name: 'Ufaq',
    },
  });
  const onDecline = () => {
    setNewOrder(null);
  };
  const onAccept = newOrder => {
    setOrder(newOrder);
    setNewOrder(null);
  };
  const onGoPress = () => {
    setIsOnline(!isOnline);
  };
  const onUserLocationChange = event => {
    console.log('userLocationChange');
    setMyPosition(event.nativeEvent.coordinate);
  };
  const onDirectionFound = event => {
    console.log('Direction found : ', event);
    if (order) {
      setOrder({
        ...order,
        distance: event.distance,
        duration: event.duration,
        pickedUp: order.pickedUp || event.distance < 0.2,
        isFinished: order.pickedUp && event.distance < 0.2,
      });
    }
  };
  const getDestination = () => {
    if (order && order.pickedUp) {
      return {
        latitude: order.destLatitude,
        longitude: order.destLongitude,
      };
    }
    return {
      latitude: order.originLatitude,
      longitude: order.originLongitude,
    };
  };

  const renderBottomTitle = () => {
    if (order && order.isFinished) {
      return (
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#cb0e0e',
              width: 200,
              padding: 10,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              COMPLETE {order.type}
            </Text>
          </View>
          <Text style={styles.bottomText}> {order.user.name} </Text>
        </View>
      );
    }
    if (order && order.pickedUp) {
      return (
        <View style={{alignItems: 'center'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>{order.duration ? order.duration.toFixed(1) : '?'} min</Text>
            <View
              style={{
                backgroundColor: '#ff0000',
                marginHorizontal: 10,
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              <FontAwesome name={'user'} color={'white'} size={20} />
            </View>
            <Text>{order.distance ? order.distance.toFixed(1) : '?'} Km</Text>
          </View>
          <Text style={styles.bottomText}>Dropping Off {order.user.name} </Text>
        </View>
      );
    }
    if (order) {
      return (
        <View style={{alignItems: 'center'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>{order.duration ? order.duration.toFixed(1) : '?'} min</Text>
            <View
              style={{
                backgroundColor: '#48d42a',
                marginHorizontal: 10,
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              <FontAwesome name={'user'} color={'white'} size={20} />
            </View>
            <Text>{order.distance ? order.distance.toFixed(1) : '?'} Km</Text>
          </View>
          <Text style={styles.bottomText}>
            Picking the Order from {order.user.name}{' '}
          </Text>
        </View>
      );
    }
    if (isOnline) {
      return <Text style={styles.bottomText}>You are online </Text>;
    }
    return <Text style={styles.bottomText}>You are offline </Text>;
  };

  return (
    <View>
      <MapView
        style={{width: '100%', height: Dimensions.get('window').height - 100}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        onUserLocationChange={onUserLocationChange}
        initialRegion={{
          latitude: 26.86763,
          longitude: 80.880577,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {order && (
          <MapViewDirections
            origin={myPosition}
            onReady={onDirectionFound}
            destination={getDestination()}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={6}
            strokeColor={'#4f990b'}
          />
        )}
      </MapView>
      <Pressable
        onPress={() => console.warn("Heyy don't touch it yaaar")}
        style={[styles.roundButton, {top: 10, left: 10}]}>
        <Entypo name={'menu'} size={24} color="#4a4a4a" />
      </Pressable>
      <Pressable
        onPress={() => console.warn("Heyy don't touch it yaaar")}
        style={[styles.roundButton, {top: 10, right: 10}]}>
        <FontAwesome name={'search'} size={24} color="#4a4a4a" />
      </Pressable>
      <Pressable onPress={onGoPress} style={styles.goButton}>
        <Text style={styles.goText}>{isOnline ? 'END' : 'GO'}</Text>
      </Pressable>
      <Pressable
        onPress={() => console.warn('Balance')}
        style={styles.balanceButton}>
        <Text style={styles.balanceText}>
          <Text style={{color: 'green'}}> ₹</Text> 0.00
        </Text>
      </Pressable>
      <Pressable
        onPress={() => console.warn("Heyy don't touch it yaaar")}
        style={[styles.roundButton, {bottom: 110, left: 10}]}>
        <Entypo name={'menu'} size={24} color="#4a4a4a" />
      </Pressable>
      <Pressable
        onPress={() => console.warn("Heyy don't touch it yaaar")}
        style={[styles.roundButton, {bottom: 110, right: 10}]}>
        <Entypo name={'menu'} size={24} color="#4a4a4a" />
      </Pressable>
      <View style={styles.bottomContainer}>
        <Ionicons name={'options'} size={30} color="#4a4a4a" />
        {renderBottomTitle()}
        <Entypo name={'menu'} size={30} color="#4a4a4a" />
      </View>
      {newOrder && (
        <NewOrderPopup
          newOrder={newOrder}
          duration={2}
          distance={0.5}
          onDecline={onDecline}
          onAccept={() => onAccept(newOrder)}
        />
      )}
    </View>
  );
};
export default HomeScreen;
