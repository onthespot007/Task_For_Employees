import React from "react" ;
import {View, Image,Text,TouchableOpacity} from "react-native";
import styles from "./styles";

import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView , {PROVIDER_GOOGLE} from "react-native-maps";

const Thelasrow =(props) => {
    const {type} = props;

    const getImage =()=>  {
        if (type === 'Vendor1') {
            return require('../../assets/Comfort.jpeg');
        }
        if (type === 'Vendor2') {
            return require('../../assets/Comfort.jpeg');
        }
        return require('../../assets/Comfort.jpeg');
    };
    return(
        <View style={styles.container}>
            {/* Image */}
            <Image
                style={styles.image}
                source={getImage()}
            />
            <View style={styles.middleContainer}>
                <TouchableOpacity><Text style={styles.type}>
                    {type.type}{' '}
                    <Ionicons name={'person'} size={16}/>
                </Text></TouchableOpacity>
            </View>
            <View style={styles.rightContainer}>
                <TouchableOpacity><Text style={styles.types} >
                    {type.distance}{' '}
                </Text></TouchableOpacity>
            </View>
        </View>
    );
};

export default Thelasrow;
