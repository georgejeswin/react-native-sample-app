import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ title, navigation }) {
    const pressHandler=()=>{
        navigation.openDrawer();
    }
  return (
    <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
      <MaterialIcons name='menu' size={28} onPress={pressHandler} style={styles.icon} />
      <View style={styles.headerContent}>
        <Image source={require('../assets/heart_logo.png')} style={styles.logo}/>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 16,
  },
  logo:{
    width:26,
    height:26,
    marginHorizontal:10
  },
  headerContent:{
    flexDirection:'row'
  }
});