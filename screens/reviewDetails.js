import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native';import Card from '../shared/Card';
import globalStyles from '../styles/globalStyles'
import { images } from '../styles/globalStyles';


const ReviewDetails = ({route}) => {
    const { title,rating,body } = route.params;
  return (
    <View style={globalStyles.container}>
      <Card>
      <Text>Reviews Screen</Text>
      <Text>title: {title}</Text>
      <Text>body: {body}</Text>
      <View style={styles.rating}>
        <Text>Gamezone Rating</Text>
        <Image source={images.ratings[rating]}/>
      </View>
      </Card>
    </View>
    )
}

export default ReviewDetails;

const styles=StyleSheet.create({
  rating:{
    flexDirection:'row',
    paddingTop:10,
    borderTopWidth:1,
    borderTopColor:'#eee',
    marginTop:15,
    justifyContent:'center',
    alignItems:'center'
  }
})