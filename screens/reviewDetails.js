import React from 'react'
import { Button, Text, View } from 'react-native';import Card from '../shared/Card';
;
import globalStyles from '../styles/globalStyles'


const ReviewDetails = ({route,navigation}) => {
    const { title,rating,body } = route.params;
  return (
    <View style={globalStyles.container}>
      <Card>
      <Text>Reviews Screen</Text>
      <Text>title: {JSON.stringify(title)}</Text>
      <Text>body: {JSON.stringify(body)}</Text>
      <Text>rating: {JSON.stringify(rating)}</Text>
      </Card>
    </View>
    )
}

export default ReviewDetails;