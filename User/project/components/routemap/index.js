import React, {useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
const GOOGLE_MAPS_APIKEY = 'AIzaSyAz7DsC7BD6aflaqt06jLrUg4pM9ccDxCs';
const RouteMap = props => {
  const [myPosition, setMyPosition] = useState(null);

  const origin = {latitude: 26.86076238103454, longitude: 80.88032449671913};
  const destination = {latitude: 26.82626, longitude: 80.914818};
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
      <Marker coordinate={destination} title={'Destination'} />
    </MapView>
  );
};

export default RouteMap;
