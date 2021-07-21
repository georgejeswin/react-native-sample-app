import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:'center',
        alignItems:'center',
        padding:24
    },
    titleText:{
        fontSize:19,
        marginBottom:20
        
    }
})

export default styles;

export const images={
    ratings:{
        '1':require('../assets/rating-1.png'),
        '2':require('../assets/rating-2.png'),
        '3':require('../assets/rating-3.png'),
        '4':require('../assets/rating-4.png'),
        '5':require('../assets/rating-5.png')
    }
}