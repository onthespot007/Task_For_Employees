import React from 'react';
import {View,Text,Image,Pressable} from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const NewOrderPopup =({newOrder,onAccept,onDecline,duration,distance}) =>{

    return (
        <View style={styles.roots}>
            <Pressable onPress={onDecline} style={styles.declineButton}>
                <Text style={styles.declineText}>Decline</Text>
            </Pressable>
            <Pressable onPress={onAccept} style={styles.popupContainer}>
                <View style={styles.row}>
                <Text style={styles.Thelatype}>{newOrder.type}</Text>
                <View style={styles.userBg}>
                    <FontAwesome name={'user'} color={'white'} size={35}/>
                </View>
                <Text style={styles.Thelatype}>
                    <AntDesign name={'star'}size={18}/>
                    {newOrder.user.rating}
                </Text>
            </View>
            <Text style={styles.minutes}>{duration} min</Text>
            <Text style={styles.distance}>{distance} km</Text>
        </Pressable>
    </View>

    );
};

export default NewOrderPopup;
