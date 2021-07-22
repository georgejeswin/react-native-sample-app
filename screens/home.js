import React from 'react'
import { useState } from 'react';
import {  Button, FlatList, Keyboard, Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import Card from '../shared/Card';
import globalStyles from '../styles/globalStyles'
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';


const Home = ({navigation}) => {
    const [modalOpen,setModalOpen]=useState(false);
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
      ]);

    const addReview=(review)=>{
        review.key=Math.random().toString();
        setReviews(currentReviews=>{
            return [review,...currentReviews]
        })
        setModalOpen(false);
    }
    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <View style={styles.modal}>
                        <MaterialIcons name='close' size={24} onPress={()=>setModalOpen(false)} style={{...styles.modalToggle,...styles.modalClose}} />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons name='add' size={24} onPress={()=>setModalOpen(true)} style={styles.modalToggle} />
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

export default Home;

const styles=StyleSheet.create({
    modalToggle:{
        marginBottom:20,
        borderWidth:1,
        borderColor:'#f2f2f2',
        padding:10,
        borderRadius:10,
        alignSelf:'center',
        marginTop:20
    },
    modalClose:{
        marginTop:40
    },
    modal:{
         flex:1,
    }
})

