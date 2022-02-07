import {StyleSheet} from "react-native";
const styles= StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'white',
        padding:20,
},
image:{
    height:70,
    width:100,
    resizeMode:'contain',
},
middleContainer: {
    flex:1,
    marginHorizontal:10,
},
type:{
  fontWeight:'bold',
  fontSize:20,
},
rightContainer: {
    width:100,
    justifyContent: 'flex-end',
    flexDirection: 'row',
},
});

export default styles;