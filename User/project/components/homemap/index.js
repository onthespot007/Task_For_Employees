import React, {useState} from "react";
import MapView, {PROVIDER_GOOGLE,Marker} from 'react-native-maps';
import {View,Text,Dimensions,Image,FlatList} from 'react-native';
import Differenthelas from "../different_thelas";
import MapOverlay from "react-native-maps/lib/components/MapOverlay";
import cars from '../../assets/data/cars';
import RouteMap from "../routemap";
const GOOGLE_MAPS_APIKEY = 'AIzaSyAz7DsC7BD6aflaqt06jLrUg4pM9ccDxCs';

import MapViewDirections from "react-native-maps-directions";
const HomeMap = (type) => {
   const getImage =(type)=>  {
        if (type === 'Vendor1') {
            return require('../../assets/Comfort.jpeg');
        }
        if (type === 'Vendor2') {
            return require('../../assets/Comfort.jpeg');
        }
        return require('../../assets/Comfort.jpeg');
    };
    const [myPosition, setMyPosition] = useState(null);

  const origin = {latitude: 26.86076238103454, longitude: 80.88032449671913};
  const destination = {latitude: 26.826260, longitude: 80.914818,};
  const onUserLocationChange = event => {
    console.log('userLocationChange');
    setMyPosition(event.nativeEvent.coordinate);
  };
  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      onUserLocationChange={onUserLocationChange}
      initialRegion={{
        latitude: 26.86763,
        longitude: 80.880577,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <MapViewDirections
        lineDashPattern={[1]}
        origin={myPosition}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="black"
      />

        {cars.map((car)=>(
            <Marker
                key={car.id}
                coordinate={{latitude:car.latitude,longitude:car.longitude}}
            >
                <Image
                    style={{width:70,height:70,resizeMode:'contain'}}
                    source={getImage(car.type)}
                />
            </Marker>
        ))}
     </MapView>
  );

};

export default HomeMap;
