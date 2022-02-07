import React from 'react';
import {View, Test, Dimensions} from 'react-native';
import HomeMap from '../homemap';
import Differenthelas from '../different_thelas';
import RouteMap from '../routemap';
const Searchthelanearby = prop => {
  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <HomeMap />
      </View>
      <View style={{height: 800}}>
        <Differenthelas />
      </View>
    </View>
  );
};
export default Searchthelanearby;
