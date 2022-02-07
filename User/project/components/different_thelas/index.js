import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Thelasrow from '../thelas_row';
import HomeMap from '../homemap';
import RouteMap from '../routemap';
import typesData from '../../assets/data/types';
const Differenthelas = props => {
  return (
    <View>
      {typesData.map(type => (
        <Thelasrow type={type} />
      ))}
    </View>
  );
};
export default Differenthelas;
