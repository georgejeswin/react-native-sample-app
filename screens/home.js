import React from 'react'
import { useState } from 'react';
import {  Button, FlatList, Text, TouchableOpacity, View } from 'react-native'
import Card from '../shared/Card';
import globalStyles from '../styles/globalStyles'

const Home = ({navigation}) => {
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
      ]);
    return (
        <View style={globalStyles.container}>
        <FlatList
              data={reviews}
              renderItem={({item})=>(
                  <TouchableOpacity onPress={()=>navigation.navigate('Details',item)}>
                      <Card>
                      <Text style={globalStyles.titleText}>{item.title}</Text>
                      </Card>
                  </TouchableOpacity>
              )}
              />
      </View>
    )
}

export default Home

