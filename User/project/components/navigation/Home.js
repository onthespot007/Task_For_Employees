import React from 'react';
import Searchthelanearby from "../searchthelanearby";
import {createStackNavigator} from "@react-navigation/stack";
import {Text, View} from "react-native";

const Stack = createStackNavigator();

function Home({navigation}) {
    return (
        <View style={{flex:1, alignItems: 'center',justifyContent:'center'}}>
            <Text style={{fontSize:30}}>Home Screen</Text>
        </View>
    )
}
export default Home;
